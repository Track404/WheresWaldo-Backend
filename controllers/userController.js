const userModel = require('../models/userModel');

async function createUser(req, res) {
  const { username, time } = req.body;
  const user = await userModel.createUser(
    username,
    time,
    Number(req.params.id)
  );

  res.json({ user: user, message: 'User Created' });
}

async function getUser(req, res) {
  const user = await userModel.getUser(Number(req.params.id));

  res.json({ user: user, message: `Get user ${req.params.id}` });
}

async function getMapUsers(req, res) {
  const users = await userModel.getMapUsers(Number(req.params.id));

  res.json({ users: users, message: `Get users from Map ${req.params.id}` });
}
module.exports = {
  createUser,
  getUser,
  getMapUsers,
};
