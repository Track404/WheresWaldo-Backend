const prisma = require('../prisma/client');

async function createUser(username, time, mapId) {
  const user = await prisma.users.create({
    data: {
      username: username,
      time: time,
      mapsId: mapId,
    },
  });
  return user;
}
async function getUser(id) {
  const user = await prisma.users.findUnique({
    where: {
      id: id,
    },
  });
  return user;
}

async function getMapUsers(mapId) {
  const users = await prisma.users.findMany({
    where: {
      mapsId: mapId,
    },
  });
  return users;
}
module.exports = {
  createUser,
  getUser,
  getMapUsers,
};
