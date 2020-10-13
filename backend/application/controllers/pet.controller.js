// Services
const RestService = require('../services/rest.service');

module.exports = {
    async getAll(req, res) {
        try {
            const pets = res.locals.pets;
            RestService.ok(res, pets);
        } catch (error) {
            RestService.internalError(res, error);
        }
    },
}
