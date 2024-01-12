const express = require("express");
const profiles = express.Router();

const profilesController = require("../../controllers/profilesController");
const { authUser } = require("../../middlewares/accessMiddleware");

const { queryValidation } = require("../../middlewares/validationMiddleware");
const profileSchema = require("../../validations/profileValidation");

profiles.get(
  "/",
  authUser,
  queryValidation(profileSchema.profilesSchemaWithPagination),
  profilesController.getAllUsers,
);

module.exports = profiles;
