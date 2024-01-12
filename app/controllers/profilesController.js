const User = require("../models/User");
const mimetics = require("mimetics");
const fs = require("fs");
const checkUniquenessOfEmail = require("./utils/index");

module.exports = {
  getAllUsers: async (req, res) => {
    const page = req.query.page - 1;
    const amountOfProfilesForPage = req.query.size || 10;
    const profiles = await User.query()
      .page(page, amountOfProfilesForPage)
      .orderBy("createdAt");
    if (!profiles?.results?.length) {
      res.status(404).json({
        error: "No users were found for provided page number.",
      });
    }
    res.status(200).json({
      profiles: profiles.results,
      totalAmountOfProfiles: profiles.total,
      totalAmountOfPages: Math.ceil(profiles.total / 10),
      message: "The list of users was found.",
    });
  },

  getUserById: async function (req, res) {
    const userId = req.params.id;
    const user = await User.query().findById(userId);
    if (!user) {
      res.status(404).json({ error: "The user wasn't found." });
    }
    res.status(200).json({ user, message: "The user was found." });
  },

  updateUser: async function (req, res) {
    const profileId = req.params.id;
    const data = req.body;
    const files = req.files;

    if (data?.email) {
      const isEmailUnique = await checkUniquenessOfEmail(data.email, profileId);
      if (!isEmailUnique) {
        return res
          .status(400)
          .json({ error: "The email is already used by other user" });
      }
      await checkUniquenessOfEmail(data.email, res, profileId);
    }

    if (
      files?.photo?.data?.byteLength &&
      files?.photo?.data?.byteLength !== 0
    ) {
      const photoName = "photo_" + new Date().getTime();
      const fileInfo = mimetics(files.photo.data);

      const outputFileName = `/photo/${photoName}.${fileInfo.ext}`;
      fs.createWriteStream(outputFileName).write(files.photo.data);

      data.photo = outputFileName;
    }
    const updatedUser = await User.query().patchAndFetchById(profileId, data);

    res.status(200).json({
      updatedUser,
      message: "The user was successfully updated.",
    });
  },
};
