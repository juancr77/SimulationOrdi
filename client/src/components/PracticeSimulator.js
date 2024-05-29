import React, { useState, useEffect } from 'react';
import { getQuestions } from '../services/api';
import Question from './Question';

const PracticeSimulator = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const response = await getQuestions('beginner', 20); // Cambia 'beginner' y '20' según sea necesario
        setQuestions(response);
      } catch (error) {
        console.error(error);
      }
    }
    fetchQuestions();
  }, []);

  const handleAnswer = (answer) => {
    if (answer && answer.is_correct) {
      setScore(score + 5); // Asumiendo que cada respuesta correcta vale 5 puntos
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert(`Simulation complete! Your score is ${score}`);
      // Aquí puedes redirigir al usuario o mostrar una pantalla de resumen
    }
  };

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Practice Simulator</h2>
      <Question
        question={questions[currentQuestionIndex]}
        answers={questions[currentQuestionIndex].answers}
        onAnswer={handleAnswer}
      />
    </div>
  );
};

export default PracticeSimulator;
