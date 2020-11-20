const { Router } = require("express");
const UserController = require("./users.controller");
const UserHelpers = require("./users.helpers");
const usersRouter = Router();

usersRouter.post(
  "/users/register",
  UserController.validate,
  UserHelpers.upload.single("avatar"),
  UserController.createAvatarURL,
  UserHelpers.minifyImage,
  UserController.register
);

usersRouter.post("/users/login", UserController.validate, UserController.login);

usersRouter.post(
  "/users/logout",
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

usersRouter.patch(
  "/users/avatar",
  UserController.authorize,
  UserHelpers.upload.single("avatar"),
  UserHelpers.minifyImage,
  UserController.updateCurrent
);

module.exports = usersRouter;
