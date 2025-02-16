const userModel = require('../models/userModel');

async function createUser(req, res) {
  const { username, time } = req.body;
  const mapId = Number(req.params.id);
  const user = await userModel.createUser(username, time, mapId);

  res.json({ user: user, message: 'User Created' });
}

async function getUser(req, res) {
  const userId = Number(req.params.id);
  const user = await userModel.getUser(userId);

  res.json({ user: user, message: `Get user ${req.params.id}` });
}

async function getMapUsers(req, res) {
  const mapId = Number(req.params.id);
  const users = await userModel.getMapUsers(mapId);

  res.json({ users: users, message: `Get users from Map ${req.params.id}` });
}

async function deleteMapUsers(req, res) {
  const mapId = Number(req.params.id);
  const users = await userModel.deleteUsersByMap(mapId);

  res.json({
    characters: users,
    message: `Delete all users from Map ${req.params.id}`,
  });
}
module.exports = {
  createUser,
  getUser,
  getMapUsers,
  deleteMapUsers,
};
