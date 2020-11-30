// Models
const {Pet, User} = require('../models');

module.exports = {

    /**
     * Retorna todos os pets
     */
    async getAll(req, res, next) {
        let {petName, size, specie} = req.query;

        let whereQuery = {};
        if (petName)
            whereQuery['name'] = petName;
        if (size)
            whereQuery['size'] = size;
        if (specie)
            whereQuery['type'] = specie;

        res.locals.pets = await Pet.findAll({where: whereQuery});
        next();
    },

    /**
     * Retorna um pet específico
     */
    async getOne(req, res, next) {
        res.locals.pet = await Pet.findByPk(req.params.id, {include: [{model: User}]});
        next();
    },

    /**
     * Cria um novo pet
     */
    async create(req, res, next) {
        req.body.userId = req.user.id;
        res.locals.pet = await Pet.create(req.body);
        next();
    },

};
