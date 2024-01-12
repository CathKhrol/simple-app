const BaseModel = require("./BaseModel");

class User extends BaseModel {
  static get tableName() {
    return "users";
  }

  static get visible() {
    return [
      "id",
      "name",
      "surname",
      "email",
      "createdAt",
      "updatedAt",
      "gender",
      "photo",
    ];
  }
  static get hidden() {
    return ["password"];
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name", "email", "password"],
      properties: {
        id: { type: "string" },
        name: { type: "string", minLength: 1, maxLength: 255 },
        surname: { type: "string", minLength: 1, maxLength: 255 },
        email: {
          type: "string",
          minLength: 10,
          maxLength: 255,
        },
        password: { type: "string", minLength: 8 },
        photo: { type: "string" },
        gender: {
          type: "boolean",
        },
        createdAt: { type: "string" },
        updatedAt: { type: "string" },
      },
    };
  }
}

module.exports = User;
