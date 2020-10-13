const express = require('express');

// Routes
const start = require('./api/start.routes');
const user = require('./api/user.routes');
const pet = require('./api/pet.routes');

let router = express.Router();

router.use('/start', start);
router.use('/user', user);
router.use('/pet', pet);


module.exports = router;
