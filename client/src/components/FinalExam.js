import React, { useEffect, useState } from 'react';
import { getQuestions } from '../services/api';

const FinalExam = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      const data = await getQuestions();
      setQuestions(data);
    };

    fetchQuestions();
  }, []);

  return (
    <div>
      <h2>Final Exam</h2>
      {questions.length > 0 ? (
        <ul>
          {questions.map((question, index) => (
            <li key={index}>{question.question_text}</li>
          ))}
        </ul>
      ) : (
        <p>Loading questions...</p>
      )}
    </div>
  );
};

export default FinalExam;
