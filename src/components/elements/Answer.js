import React from 'react';
import Paper from '@mui/material/Paper';
import { AnswerText } from '../../styles/fonts/answers/AnswerText';
import { AnswerBoxContainer } from '../../styles/fonts/answers/AnswerBoxContainer';
import { LetterMapBox } from '../../styles/fonts/answers/LetterMapBox';
import { getAnswerClass } from '../../utils/answerClass';

const Answer = ({ answerText, onSelectAnswer, index, currentAnswer, correctAnswer }) => {
  const letterMapping = ["A", "B", "C", "D"];
  const isCorrectAnswer = currentAnswer && answerText === correctAnswer;
  const isWrongAnswer = currentAnswer === answerText && answerText !== correctAnswer;
  const answerClass = getAnswerClass({ isCorrectAnswer, isWrongAnswer, currentAnswer });

  return (
    <AnswerBoxContainer 
      className={answerClass} 
      onClick={() => onSelectAnswer(answerText)} 
      isCorrectAnswer={isCorrectAnswer} 
      isWrongAnswer={isWrongAnswer} 
      component={Paper} 
      elevation={7} 
    > 
      <LetterMapBox isCorrectAnswer={isCorrectAnswer} isWrongAnswer={isWrongAnswer}> 
        {letterMapping[index]} 
      </LetterMapBox> 
      <AnswerText>{answerText}</AnswerText> 
    </AnswerBoxContainer>
  );
};

export default Answer;