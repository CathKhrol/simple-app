const express = require("express");
const profile = express.Router();

const profilesController = require("../../controllers/profilesController");
const { authUser } = require("../../middlewares/accessMiddleware");
const {
  bodyValidation,
  formDataValidation,
} = require("../../middlewares/validationMiddleware");
const profileSchema = require("../../validations/profileValidation");

profile
  .get("/:id", authUser, profilesController.getUserById)
  .put(
    "/:id",
    authUser,
    bodyValidation(profileSchema.profileSchemaUpdate),
    formDataValidation(profileSchema.profileSchemaPhotoUpdate),
    profilesController.updateUser,
  );

module.exports = profile;
