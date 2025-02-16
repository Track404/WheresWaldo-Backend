const characterModel = require('../models/characterModel');

async function createCharacter(req, res) {
  const { name, imageId, mapId, Xmin, Xmax, Ymin, Ymax } = req.body;
  const chraracter = await characterModel.createCharacter(
    name,
    Number(imageId),
    Number(mapId),
    Number(Xmin),
    Number(Xmax),
    Number(Ymin),
    Number(Ymax)
  );

  res.json({ chraracter: chraracter, message: 'Character Created' });
}

async function getCharacter(req, res) {
  const chraracterId = Number(req.params.id);
  const chraracter = await characterModel.getCharacter(chraracterId);

  res.json({
    chraracter: chraracter,
    message: `Get character ${req.params.id}`,
  });
}

async function getMapCharacters(req, res) {
  const mapId = Number(req.params.id);
  const characters = await characterModel.getMapCharacters(mapId);

  res.json({
    characters: characters,
    message: `Get characters from Map ${req.params.id}`,
  });
}
async function DeleteMapCharacters(req, res) {
  const mapId = Number(req.params.id);
  const characters = await characterModel.deleteCharactersByMap(mapId);

  res.json({
    characters: characters,
    message: `Delete all characters from Map ${req.params.id}`,
  });
}
module.exports = {
  createCharacter,
  getCharacter,
  getMapCharacters,
  DeleteMapCharacters,
};
