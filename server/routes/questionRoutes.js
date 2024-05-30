const express = require('express');
const { fetchQuestions } = require('../controllers/questionController');

const router = express.Router();

router.get('/questions', fetchQuestions);

module.exports = router;
