const prisma = require('../prisma/client');

async function createCharacter(name, imageId, mapId, Xmin, Xmax, Ymin, Ymax) {
  const chraracter = await prisma.chraracters.create({
    data: {
      name: name,
      imageId: imageId,
      mapsId: mapId,
      position: {
        create: {
          Xmin: Xmin,
          Xmax: Xmax,
          Ymin: Ymin,
          Ymax: Ymax,
        },
      },
    },
  });
  return chraracter;
}
async function getCharacter(id) {
  const chraracter = await prisma.chraracters.findUnique({
    where: {
      id: id,
    },
    include: {
      position: true,
    },
  });
  return chraracter;
}

async function getMapCharacters(mapId) {
  const characters = await prisma.chraracters.findMany({
    where: {
      mapsId: mapId,
    },
    include: {
      position: true,
    },
  });
  return characters;
}

async function deleteCharactersByMap(mapId) {
  const deletedCharacters = await prisma.chraracters.deleteMany({
    where: {
      mapsId: mapId, // All characters belonging to the map
    },
  });

  return deletedCharacters;
}
module.exports = {
  createCharacter,
  getCharacter,
  getMapCharacters,
  deleteCharactersByMap,
};
