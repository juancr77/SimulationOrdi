const express = require('express');
const Question = require('../models/questionModel');
const router = express.Router();

router.get('/questions', (req, res) => {
  const { level, limit } = req.query;
  Question.getQuestionsByLevel(level, parseInt(limit), (err, questions) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(questions);
  });
});

module.exports = router;
