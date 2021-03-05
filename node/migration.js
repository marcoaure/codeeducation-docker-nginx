const mysql = require("mysql");
const migration = require("mysql-migrations");
const { connectionParameters } = require("./db-helper");

const connection = mysql.createPool(connectionParameters);

migration.init(
  connection,
  __dirname + "/migrations",
  function () {
    console.log("finished running migrations");
  },
  ["--migrate-all"]
);
