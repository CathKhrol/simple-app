const express = require("express");
const users = express.Router();
const { bodyValidation } = require("../../middlewares/validationMiddleware");
const userSchema = require("../../validations/userValidation");
const {
  userLoginJwt,
  userRegister,
} = require("../../controllers/usersController");

users
  .post(
    "/register",
    bodyValidation(userSchema.userSchemaRegister),
    userRegister,
  )
  .post(
    "/login",
    bodyValidation(userSchema.userSchemaLoginViaJwt),
    userLoginJwt,
  );

module.exports = users;
