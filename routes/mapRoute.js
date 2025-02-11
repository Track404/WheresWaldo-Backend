const { Router } = require('express');
const mapController = require('../controllers/mapController');
const mapRouter = Router();

mapRouter.get('/map/:id', mapController.getMap);
mapRouter.post('/map', mapController.CreateMap);

module.exports = mapRouter;
