// server/models/questionModel.js
const db = require('../db'); // Asegúrate de que esta ruta sea correcta

const getQuestions = async () => {
  const query = 'SELECT * FROM questions';
  return await db.query(query);
};

module.exports = {
  getQuestions,
};
