const db = require('./db');

const User = {
  createUser: (userData, callback) => {
    const sql = 'INSERT INTO users (username, password, email) VALUES (?, ?, ?)';
    db.query(sql, [userData.username, userData.password, userData.email], callback);
  },
  getUserByUsername: (username, callback) => {
    const sql = 'SELECT * FROM users WHERE username = ?';
    db.query(sql, [username], callback);
  }
};

module.exports = User;
