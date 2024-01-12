require("dotenv").config();
const express = require("express");
const appRouter = require("./app/routes/index.js");
const knex = require("./knex/db.js");
const { Model } = require("objection");
const fileUpload = require("express-fileupload");
const formidable = require("express-formidable");

Model.knex(knex);
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());
//app.use(formidable());
app.use(appRouter);

const PORT = process.env.PORT;
const server = app.listen(PORT, () =>
  console.log("App listening at port %s", server.address().port),
);
