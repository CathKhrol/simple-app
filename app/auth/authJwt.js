const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const passport = require("passport");
const User = require("../models/User");

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET_WORD,
};
module.exports = function (passport) {
  passport.use(
    "jwt",
    new JwtStrategy(options, async (jwt_payload, done) => {
      const user = await User.query().findOne({ id: jwt_payload.uid });
      if (!user) {
        return done(null, false, { message: "You are not logged in." });
      }
      return done(null, user, { message: "Successfully authenticated." });
    }),
  );
};
