import React, { useState, useEffect } from 'react';

const Question = ({ question, answers, onAnswer }) => {
  const [timeLeft, setTimeLeft] = useState(60); // 1 minuto por pregunta

  useEffect(() => {
    if (timeLeft === 0) {
      onAnswer(null); // Enviar null si se acaba el tiempo y no se selecciona respuesta
      return;
    }
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, onAnswer]);

  const handleAnswer = (answer) => {
    setTimeLeft(0); // Detener el temporizador cuando se selecciona una respuesta
    onAnswer(answer);
  };

  return (
    <div>
      <div>
        <p>{question.question_text}</p>
        {answers.map((answer) => (
          <button key={answer.id} onClick={() => handleAnswer(answer)}>
            {answer.answer_text}
          </button>
        ))}
      </div>
      <div>Time left: {timeLeft} seconds</div>
    </div>
  );
};

export default Question;
