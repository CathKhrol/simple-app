const crypto = require("crypto");

module.exports = {
  validatePassword: function (password, hash, salt) {
    const hashPossible = crypto
      .pbkdf2Sync(password, salt, 10000, 64, "sha512")
      .toString("hex");
    return hash === hashPossible;
  },
  generatePassword: function (password) {
    const salt = crypto.randomBytes(32).toString("hex");
    const hash = crypto
      .pbkdf2Sync(password, salt, 10000, 64, "sha512")
      .toString("hex");

    return { salt, hash };
  },
};
