import React from 'react';
import Answer from './Answer';
import { QuestionContainer } from '../../styles/containers/QuestionContainer';
import { AnswersContainer } from '../../styles/containers/AnswersContainer';
import { useQuestionData } from '../../utils/useQuestionData';

const Question = () => {

  const { currentQuestion, answers, currentAnswer, handleSelectAnswer } = useQuestionData();

  return (
    <div>
      <QuestionContainer>{currentQuestion.question}</QuestionContainer>
      <AnswersContainer>
        {answers.map((answer, index) => (
          <Answer
            key={index}
            index={index}
            answerText={answer}
            correctAnswer={currentQuestion.correctAnswer}
            currentAnswer={currentAnswer}
            onSelectAnswer={handleSelectAnswer}
          />
        ))}
      </AnswersContainer>
    </div>
  );
};

export default Question;