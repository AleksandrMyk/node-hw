const express = require("express");
const ContactController = require("../controllers/contact.controller");

const router = express.Router();

router.get("/", ContactController.getUsers);

router.post(
  "/",
  ContactController.validateCreateUser,
  ContactController.addUser
);

router.patch(
  "/:id",
  ContactController.checkUserInList,
  ContactController.checkDataExist,
  ContactController.validateUpdateUser,
  ContactController.updateUser
);

router.get(
  "/:id",
  ContactController.checkUserInList,
  ContactController.getUserById
);

router.delete(
  "/:id",
  ContactController.checkDataExist,
  ContactController.deleteUser
);

module.exports = router;
