//  import mysql
const mysql = require("mysql2/promise");

// define connection parameters
const dbConfig = {
  connectionLimit: 10,
  password: process.env.DB_PASS,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  // socketPath: process.env.DB_SOCKET_PATH
};

// create the connection pool
const pool = mysql.createPool(dbConfig);

// create the function to excute the queries
async function query(sql, params) {
  const [results] = await pool.execute(sql, params);
  return results;
}

// export the query function
module.exports = { query };
