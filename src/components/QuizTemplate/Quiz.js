import React, { useState } from "react";
import "./styles.quiz.css";

export default function Quiz({ questions }) {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (questionIndex, isCorrect) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = isCorrect
      ? "right"
      : `wrong, correct answer is ${
          questions[questionIndex].answerOptions.find(
            (option) => option.isCorrect
          ).answerText
        }`;
    setAnswers(newAnswers);

    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleShowResults = () => {
    setShowResults(true);
  };

  return (
    <div className="quiz">
      {questions.map((question, questionIndex) => (
        <div key={questionIndex} className="question-section">
          <div className="question-count">
            <span>Question {questionIndex + 1}</span>/{questions.length}
          </div>
          <div className="question-text">{question.questionText}</div>
          <div className="answer-section">
            {question.answerOptions.map((answerOption, index) => (
              <button
                key={index}
                onClick={() =>
                  handleAnswerOptionClick(questionIndex, answerOption.isCorrect)
                }
                disabled={answers[questionIndex] !== null}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
          {answers[questionIndex] && (
            <div className="feedback-section">{answers[questionIndex]}</div>
          )}
        </div>
      ))}
      {!showResults && (
        <button onClick={handleShowResults}>Show Results</button>
      )}
      {showResults && (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      )}
    </div>
  );
}
