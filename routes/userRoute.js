const { Router } = require('express');
const userRouter = Router();
const userController = require('../controllers/userController');
userRouter.get('/user/:id', userController.getUser);
userRouter.get('/map/:id/user', userController.getMapUsers);
userRouter.post('/map/:id/user', userController.createUser);
userRouter.delete('/map/:id/users', userController.deleteMapUsers);
module.exports = userRouter;
