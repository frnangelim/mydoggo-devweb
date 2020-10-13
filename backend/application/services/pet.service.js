// Models
const { Pet } = require('../models');

module.exports = {

    /**
     * Retorna todos os pets
     */
    async getAll(req, res, next) {
        res.locals.pets = await Pet.findAll({});
        next();
    },

};
