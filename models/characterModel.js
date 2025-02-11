const prisma = require('../prisma/client');

async function createCharacter(name, mapId, Xmin, Xmax, Ymin, Ymax) {
  const chraracter = await prisma.users.create({
    data: {
      name: name,
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
module.exports = {
  createCharacter,
  getCharacter,
  getMapCharacters,
};
