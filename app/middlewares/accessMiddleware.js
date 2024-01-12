const passport = require("passport");
require("../auth/authJwt")(passport);

const authUser = (req, res, next) => {
  if (!req.get("Authorization"))
    return res.status(401).json({
      errors: "You are not logged in",
    });

  return passport.authenticate("jwt", { session: false }, (error, user) => {
    if (error) {
      return next(error);
    }
    if (!user) {
      return res.status(401).json({
        errors: "You are not logged in",
      });
    } else {
      req.user = user;
      return next();
    }
  })(req, res, next);
};

module.exports = { authUser };
