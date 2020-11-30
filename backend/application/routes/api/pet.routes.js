const express = require('express');

const Controller = require('../../controllers/pet.controller');
const PetService = require('../../services/pet.service');
const AuthService = require('../../services/auth.service');

let router = express.Router();

router.get('/',
    PetService.getAll, Controller.getAll);

router.get('/:id',
    PetService.getOne, Controller.getOne);

router.post('/',
    AuthService.verifyToken,
    PetService.create, Controller.create);

module.exports = router;
