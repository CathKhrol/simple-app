const { ValidationError } = require("objection");

function bodyValidation(schema) {
  return async (req, _res, next) => {
    try {
      const validatedBody = await schema.validate(req.body, {
        abortEarly: true,
        strict: false,
        stripUnknown: true,
      });
      req.body = validatedBody;
      return next();
    } catch (err) {
      throw new ValidationError(err);
    }
  };
}

function formDataValidation(schema) {
  return async (req, _res, next) => {
    try {
      const validatedFiles = await schema.validate(req.files, {
        abortEarly: true,
        strict: false,
        stripUnknown: true,
      });
      req.files = validatedFiles;
      return next();
    } catch (err) {
      throw new ValidationError(err);
    }
  };
}

function queryValidation(schema) {
  return async (req, _res, next) => {
    try {
      const validatedQuery = await schema.validate(req.query, {
        abortEarly: true,
        strict: false,
        stripUnknown: true,
      });
      req.query = validatedQuery;
      return next();
    } catch (err) {
      throw new ValidationError(err);
    }
  };
}

module.exports = { bodyValidation, queryValidation, formDataValidation };
