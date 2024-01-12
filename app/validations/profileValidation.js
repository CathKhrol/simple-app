const yup = require("yup");
const { isFileSizeValid, isFileTypesValid } = require("./fileValidation");
const fileTypes = ["image/png", "image/jpg", "image/jpeg"];

const profileSchema = {
  profilesSchemaWithPagination: yup.object({
    page: yup.number().min(1).required(),
    size: yup.number().min(1).optional(),
  }),
  profileSchemaPhotoUpdate: yup.object({
    photo: yup
      .mixed()
      .test("size", "The file size is too large", (value) => {
        if (!value) return true;
        return isFileSizeValid([value], 10485760);
      })
      .test(
        "mimetype",
        "Only the following formats are accepted: .jpeg, .jpg, .png",
        (value) => {
          if (!value) return true;
          return isFileTypesValid([value], fileTypes);
        },
      )
      .optional(),
  }),
  profileSchemaUpdate: yup.object({
    name: yup.string().min(1).max(255).optional(),
    surname: yup.string().min(1).max(255).optional(),
    email: yup.string().email().min(10).max(255).optional(),
    gender: yup.boolean().optional(),
  }),
};

module.exports = profileSchema;
