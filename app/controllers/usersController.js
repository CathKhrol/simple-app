"use strict";

const User = require("../models/User");
const cryptoHelper = require("../crypto/cryptoHelper");
const jsonwebtoken = require("jsonwebtoken");
const checkUniquenessOfEmail = require("./utils/index");

module.exports = {
  userRegister: async (req, res) => {
    const { name, email, password } = req.body;

    const isEmailUnique = await checkUniquenessOfEmail(email);
    if (!isEmailUnique) {
      return res
        .status(400)
        .json({ error: "The user with such email already exist" });
    }
    const saltHash = cryptoHelper.generatePassword(password);
    const { salt, hash } = saltHash;

    const insertedUser = await User.query().insert({
      name,
      email,
      salt,
      password: hash,
    });

    res.status(201).json({ insertedUser, message: "User registered" });
  },
  userLoginJwt: async (req, res) => {
    const { email, password } = req.body;
    const existingUser = await User.query().findOne({ email });
    if (!existingUser)
      return res.status(401).json({
        error: "Wrong login or password",
      });

    const passwordIsValid = cryptoHelper.validatePassword(
      password,
      existingUser.password,
      existingUser.salt,
    );

    if (passwordIsValid) {
      const payload = {
        uid: existingUser.id,
        iat: Math.floor(Date.now() / 1000),
      };
      const expiresIn = "7 days";
      const signedToken = jsonwebtoken.sign(
        payload,
        process.env.JWT_SECRET_WORD,
        {
          expiresIn,
        },
      );
      const token = `Bearer ${signedToken}`;
      res.set("Authorization", token);
      res.status(200).json({
        existingUser,
        jwt: {
          token,
          expiresIn,
        },
      });
    } else {
      res.status(401).json({
        error: "Wrong login or password",
      });
    }
  },
};
