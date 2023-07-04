const mysql = require("mysql2/promise");

let connection = null;

const connect = async () => {
  if (!connection)
    connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "qwe123",
      database: "mytodo",
    });
};

const getConnection = () => {
  return connection;
};

module.exports = { connect, getConnection };
