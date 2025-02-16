const { Router } = require('express');
const characterRouter = Router();
const characterController = require('../controllers/characterController');

characterRouter.get('/character/:id', characterController.getCharacter);
characterRouter.get('/map/:id/character', characterController.getMapCharacters);
characterRouter.post('/character', characterController.createCharacter);
characterRouter.delete(
  '/map/:id/character',
  characterController.DeleteMapCharacters
);
module.exports = characterRouter;
