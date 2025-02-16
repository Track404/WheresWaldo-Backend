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
    orderBy: {
      time: 'asc', // Sorts by name in ascending order
    },
    take: 15,
  });
  return users;
}
async function deleteUsersByMap(mapId) {
  const deleteUsers = await prisma.users.deleteMany({
    where: {
      mapsId: mapId, // All characters belonging to the map
    },
  });

  return deleteUsers;
}
module.exports = {
  createUser,
  getUser,
  getMapUsers,
  deleteUsersByMap,
};
