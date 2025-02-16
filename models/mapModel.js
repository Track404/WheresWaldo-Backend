const prisma = require('../prisma/client');

async function createMap(name) {
  const map = await prisma.maps.create({
    data: {
      name: name,
    },
  });
  return map;
}
async function getMap(id) {
  if (!id || isNaN(id)) {
    throw new Error('Invalid or missing id parameter');
  }

  const map = await prisma.maps.findUnique({
    where: {
      id: id,
    },
    include: {
      Characters: {
        include: {
          position: true,
        },
      },
      Users: true,
    },
  });
  return map;
}
module.exports = {
  createMap,
  getMap,
};
