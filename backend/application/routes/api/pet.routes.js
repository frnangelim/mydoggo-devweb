const express = require('express');

const Controller = require('../../controllers/pet.controller');
const PetService = require('../../services/pet.service');

let router = express.Router();

router.get('/',
    PetService.getAll, Controller.getAll);

router.get('/:id',
    PetService.getOne, Controller.getOne);

module.exports = router;
