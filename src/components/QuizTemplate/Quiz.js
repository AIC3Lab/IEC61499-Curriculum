import React, { useState } from "react";
import "./styles.quiz.css";

export default function Quiz({ questions }) {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (questionIndex, isCorrect, answerIndex) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = {
      isCorrect,
      selectedAnswerIndex: answerIndex,
      correctAnswerIndex: questions[questionIndex].answerOptions.findIndex(
        (option) => option.isCorrect
      ),
    };
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
                  handleAnswerOptionClick(
                    questionIndex,
                    answerOption.isCorrect,
                    index
                  )
                }
                disabled={answers[questionIndex] !== null}
                className={
                  answers[questionIndex]
                    ? index === answers[questionIndex].selectedAnswerIndex
                      ? answers[questionIndex].isCorrect
                        ? "correct"
                        : "incorrect"
                      : index === answers[questionIndex].correctAnswerIndex
                      ? "correct"
                      : ""
                    : ""
                }
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
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
