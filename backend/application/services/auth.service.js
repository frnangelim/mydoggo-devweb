// Models
const {User, Role} = require('../models');

// Services
const RestService = require('../services/rest.service');

// Constants
const secret = 'xl0nt4r10x';

// Libraries
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {
    /**
     * Valida o token enviado no header 'authorization'
     */
    verifyToken(req, res, next) {
        const token = req.headers['authorization'];
        if (!token)
            return RestService.internalError(res, {err: 'Token não fornecido.'});

        jwt.verify(token, process.env.APP_SECRET || secret, function (err, decoded) {
            if (err)
                return RestService.internalError(res, {err: 'Falha na autenticação do token.'});

            User.findOne({
                where: {id: decoded.id},
                include: [{model: Role, as: 'roles'}]
            }).then((user) => {
                req.user = user;
                next();
            });
        });
    },

    /**
     * Verifica se um email e senha são válidos para algum usuário.
     */
    async login(req, res, next) {
        let body = req.body;

        if (!body.email) {
            return RestService.badRequest(res, "Email não fornecido.", next);
        } else if (!body.password) {
            return RestService.badRequest(res, "Senha não fornecida.", next);
        }

        const user = await User.findOne({
            where: {email: body.email}, include: [{model: Role, as: 'roles'}]
        });

        if (!user || (!bcrypt.compareSync(body.password, user.password))) {
            return RestService.badRequest(res, "Usuário e/ou senha incorretos.", next);
        }

        let jwt = module.exports.generateJWT(user);
        delete user.dataValues['password'];

        res.locals.response = {
            user: user,
            jwt: jwt
        };
        next();
    },

    /**
     * Retorna um JSON Web token para um usuário
     */
    generateJWT(user) {
        return jwt.sign({id: user.id}, process.env.APP_SECRET || secret);
    }

};
