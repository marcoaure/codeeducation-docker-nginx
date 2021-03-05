module.exports = {
  up:
    "CREATE TABLE people (id INT NOT NULL AUTO_INCREMENT, UNIQUE KEY id (id), name TEXT )",
  down: "DROP TABLE users",
};
