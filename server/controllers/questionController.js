const Question = require('../models/questionModel');

const getQuestions = (req, res) => {
  const { level, limit } = req.query;
  
  Question.getQuestionsByLevel(level, parseInt(limit), (err, questions) => {
    if (err) return res.status(500).send(err);
    res.status(200).send(questions);
  });
};

module.exports = { getQuestions };
