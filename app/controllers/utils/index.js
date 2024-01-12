const User = require("../../models/User");

async function checkUniquenessOfEmail(email, userId) {
  const user = await User.query()
    .select("id", "email")
    .where("email", "=", email);

  if (!user?.length) {
    return true;
  }

  if (userId) {
    if (user[0].id === userId) return true;
  }

  return false;
}
module.exports = checkUniquenessOfEmail;
