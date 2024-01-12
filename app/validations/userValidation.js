const yup = require("yup");
const userSchema = {
  userSchemaRegister: yup.object({
    name: yup.string().min(1).max(255).required(),
    email: yup.string().email().min(10).max(255).required(),
    password: yup.string().min(8).required(),
  }),
  userSchemaLoginViaJwt: yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  }),
};

module.exports = userSchema;
