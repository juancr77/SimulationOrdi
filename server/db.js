// server/db.js
const mysql = require('mysql');
const util = require('util');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'tu_usuario', // Cambia esto por tu usuario de MySQL
  password: 'tu_contraseña', // Cambia esto por tu contraseña de MySQL
  database: 'tu_base_de_datos' // Cambia esto por tu base de datos de MySQL
});

pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.error('Database connection was closed.');
    }
    if (err.code === 'ER_CON_COUNT_ERROR') {
      console.error('Database has too many connections.');
    }
    if (err.code === 'ECONNREFUSED') {
      console.error('Database connection was refused.');
    }
  }

  if (connection) connection.release();

  return;
});

pool.query = util.promisify(pool.query);

module.exports = pool;
