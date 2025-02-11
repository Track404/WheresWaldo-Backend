const mapModel = require('../models/mapModel');

async function CreateMap(req, res) {
  const { name } = req.body;
  const map = await mapModel.createMap(name);

  res.json({ map: map, message: 'Map Created' });
}

async function getMap(req, res) {
  const mapId = Number(req.params.id);
  const map = await mapModel.getMap(mapId);

  res.json({ map: map, message: `Get Map ${req.params.id}` });
}
module.exports = {
  CreateMap,
  getMap,
};
