const { Router } = require('express');
const characterRouter = Router();
const characterController = require('../controllers/characterController');
const { chraracters } = require('../prisma/client');

characterRouter.get('/character/:id', characterController.getCharacter);
characterRouter.get('/map/:id/character', characterController.getMapCharacters);
characterRouter.post('/character', characterController.createCharacter);

module.exports = characterRouter;
