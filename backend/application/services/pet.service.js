// Models
const {Pet} = require('../models');

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

};
