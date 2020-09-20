const express = require('express');

const Controller = require('../../controllers/user.controller');
const UserService = require('../../services/user.service');

let router = express.Router();

router.get('/',
    UserService.getAll, Controller.getAll);

router.post('/',
    UserService.hashPassword, UserService.create, Controller.create);

router.post('/login',
    UserService.login, Controller.login);

module.exports = router;
