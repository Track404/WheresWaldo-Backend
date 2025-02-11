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
  const map = await prisma.maps.findUnique({
    where: {
      id: id,
    },
    include: {
      Characters: true,
      Users: true,
    },
  });
  return map;
}
module.exports = {
  createMap,
  getMap,
};
