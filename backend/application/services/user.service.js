// Models
const { User, Role, UserRole } = require('../models');

// Services
const RestService = require('../services/rest.service');
const AuthService = require('../services/auth.service');

// Libraries
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const DEFAULT_USER_ROLE = 1;

module.exports = {

    /**
     * Verifica se um email e senha são válidos para algum usuário.
     */
    async login(req, res, next) {
        let body = req.body;

        if (!body.email) {
            return RestService.badRequest(res, "Email não fornecido.");
        } else if (!body.password) {
            return RestService.badRequest(res, "Senha não fornecida.");
        }

        const user = await User.findOne({
            where: { email: body.email },
            include: { all: true }
        });

        if (!user || (!bcrypt.compareSync(body.password, user.password))) {
            return RestService.badRequest(res, "Usuário e/ou senha incorretos.");
        }

        let jwt = AuthService.generateJWT(user);
        delete user.dataValues['password'];

        res.locals.response = {
            user: user,
            jwt: jwt
        };
        next();
    },

    /**
     * Retorna todos os usuários
     */
    async getAll(req, res, next) {
        res.locals.users = await User.findAll({
            attributes: {
                exclude: ['password']
            }
        });
        next();
    },

    /**
     * Criptografa a senha utilizando bcrypt
     */
    async hashPassword(req, res, next) {
        let user = req.body;
        user.password = bcrypt.hashSync(user.password, 8);

        res.locals.user = user;
        next();
    },

    /**
     * Cria novo usuário
     */
    async create(req, res, next) {
        let user = res.locals.user;

        user = await User.create(user);
        await UserRole.create({
            userId: user.id,
            roleId: DEFAULT_USER_ROLE
        });

        user.dataValues.jwt = AuthService.generateJWT(user);
        user.dataValues.roles = await UserRole.findAll({ where: { userId: user.id }, include: [Role] });
        delete user.dataValues['password'];

        res.locals.user = user;
        next();
    },

    /**
     * Atualiza um usuário autenticado
     */
    async update(req, res, next) {
        const userToUpdate = await User.findOne({
            where: { id: req.params.id }, include: [{ model: Role, as: 'roles' }]
        });

        if (!userToUpdate)
            return RestService.badRequest(res, 'Usuário inexistente');

        await userToUpdate.update(req.body);
        delete userToUpdate.dataValues['password'];

        res.locals.user = userToUpdate;
        next();
    },
};
