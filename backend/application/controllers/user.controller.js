// Services
const RestService = require('../services/rest.service');

module.exports = {
    async getAll(req, res) {
        try {
            const users = res.locals.users;
            RestService.ok(res, users);
        } catch (error) {
            RestService.internalError(res, error);
        }
    },

    async create(req, res) {
        try {
            const user = res.locals.user;
            RestService.ok(res, user);
        } catch (error) {
            RestService.internalError(res, error);
        }
    },

    async login(req, res) {
        try {
            const response = res.locals.response;
            RestService.ok(res, response);
        } catch (error) {
            RestService.internalError(res, error);
        }
    },
}
