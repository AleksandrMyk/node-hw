const { Router } = require("express");
const UserController = require("./users.controller");
const usersRouter = Router();

usersRouter.post(
  "/auth/register",
  UserController.validate,
  UserController.register
);

usersRouter.post("/auth/login", UserController.validate, UserController.login);

usersRouter.post(
  "/auth/logout",
  UserController.authorize,
  UserController.logout
);

usersRouter.get(
  "/users/current",
  UserController.authorize,
  UserController.getCurrent
);

usersRouter.patch(
  "/users/:id",
  UserController.authorize,
  UserController.updateCurrent
);

module.exports = usersRouter;
