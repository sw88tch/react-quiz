import React from 'react';
import { styled } from '@mui/system';
import quizButton from './QuizButton';
import { ButtonOutfits } from '../../styles/buttons/ButtonOutfits';

const ButtonRow = styled('div')(ButtonOutfits);

const renderButtonRow = (buttonNumbers, onStartQuiz, buttonStyles) => (
  <ButtonRow>
    {buttonNumbers?.map((number) => (
      quizButton(number, onStartQuiz, buttonStyles)
    ))}
  </ButtonRow>
);

export default renderButtonRow;