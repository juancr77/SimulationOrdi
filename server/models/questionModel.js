const db = require('./db');

const Question = {
  getQuestionsByLevel: (level, limit, callback) => {
    const sql = `
      SELECT q.id as question_id, q.question_text, q.level, a.id as answer_id, a.answer_text, a.is_correct
      FROM questions q
      JOIN answers a ON q.id = a.question_id
      WHERE q.level = ?
      ORDER BY RAND()
      LIMIT ?`;
    db.query(sql, [level, limit], (err, results) => {
      if (err) return callback(err);

      // Transformar los resultados para agrupar respuestas por pregunta
      const questions = [];
      const questionsMap = new Map();

      results.forEach(row => {
        if (!questionsMap.has(row.question_id)) {
          const question = {
            id: row.question_id,
            question_text: row.question_text,
            level: row.level,
            answers: []
          };
          questionsMap.set(row.question_id, question);
          questions.push(question);
        }
        questionsMap.get(row.question_id).answers.push({
          id: row.answer_id,
          answer_text: row.answer_text,
          is_correct: row.is_correct
        });
      });

      callback(null, questions);
    });
  }
};

module.exports = Question;
