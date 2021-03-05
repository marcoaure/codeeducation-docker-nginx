const random = require("random-name");

const connectionParameters = {
  connectionLimit: 10,
  host: "db",
  user: "user",
  password: "pass",
  database: "db",
  port: 3306,
};

const connect = async () => {
  if (global.connection && global.connection.state !== "disconnected")
    return global.connection;

  const mysql2 = require("mysql2/promise");
  const connection = await mysql2.createConnection(
    `mysql://${connectionParameters.user}:${connectionParameters.password}@${connectionParameters.host}:${connectionParameters.port}/${connectionParameters.database}`
  );
  global.connection = connection;
  return connection;
};

const addPeople = async () => {
  const conn = await connect();
  const sql = "INSERT INTO people(name) VALUES (?);";
  const values = [random.first()];
  return await conn.query(sql, values);
};

const getPeople = async () => {
  const conn = await connect();
  const [rows] = await conn.query("SELECT * FROM people;");
  return rows;
};

module.exports = {
  connectionParameters,
  addPeople,
  getPeople,
};
