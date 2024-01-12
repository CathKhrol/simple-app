const { Model, mixin } = require("objection");
const timestampPlugin = require("objection-timestamps").timestampPlugin;
const visibilityPlugin = require("objection-visibility").default;
const crypto = require("crypto");

const plugin = timestampPlugin({
  createdAt: "createdAt",
  updatedAt: "updatedAt",
});

class BaseModel extends mixin(Model, [plugin, visibilityPlugin]) {
  static get timestamp() {
    return true;
  }

  async $beforeInsert(queryContext) {
    await super.$beforeInsert(queryContext);
    this.id = crypto.randomUUID();
  }

  async $beforeUpdate(queryContext) {
    await super.$beforeUpdate(queryContext);
    this.updatedAt = new Date();
  }
}

module.exports = BaseModel;
