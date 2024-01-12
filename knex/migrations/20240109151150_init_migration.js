/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTableIfNotExists("users", (table) => {
    table.uuid("id").primary();
    table.string("name").notNullable();
    table.string("surname");
    table.string("email").unique().notNullable();
    table.string("password").notNullable();
    table.string("salt");
    table.boolean("gender");
    table.string("photo");
    table.date("createdAt");
    table.date("updatedAt");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};
