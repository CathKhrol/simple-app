const express = require("express");
const appRouter = express.Router();
const userRouter = require("./users/users.js");
const profilesRouter = require("./profiles/profiles.js");
const profileRouter = require("./profile/profile.js");

appRouter.use("/user", userRouter);
appRouter.use("/profiles", profilesRouter);
appRouter.use("/profile", profileRouter);

module.exports = appRouter;
