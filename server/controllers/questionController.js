const { getQuestions } = require('../models/questionModel');

const fetchQuestions = async (req, res) => {
  try {
    const questions = await getQuestions();
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: 'Error getting questions' });
  }
};

module.exports = { fetchQuestions };
