import React from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/system';
import { StartPageContainer } from '../../styles/containers/StartPageContainer';
import renderButtonRow from '../buttons/RenderButtonRow';
import { ButtonFormats } from '../../styles/buttons/ButtonFormats'
import { FontStyles } from '../../styles/fonts/FontStyles';

const StartPageHub = styled('section')(StartPageContainer);

const StartPage = ({ onStartQuiz }) => {
  const numbers = [4, 6, 8, 10];
  const firstPairOfNumbers = numbers.slice(0, 2);
  const secondPairOfNumbers = numbers.slice(2);

  return (
    <StartPageHub>
      <Typography variant="h2" sx={FontStyles}>
        Choose the number of questions in Quiz:
      </Typography>
      {renderButtonRow(firstPairOfNumbers, onStartQuiz, ButtonFormats)}
      {renderButtonRow(secondPairOfNumbers, onStartQuiz, ButtonFormats)}
    </StartPageHub>
  );
};

export default StartPage;