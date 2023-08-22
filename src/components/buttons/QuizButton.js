import React from 'react';
import { Button } from '@mui/material';
import Paper from '@mui/material/Paper';

const quizButton = (number, onStartQuiz, buttonStyles) => (
  <Button
    key={number}
    onClick={() => onStartQuiz(number)}
    sx={buttonStyles}
    component={Paper}
    elevation={3}
  >
    {number}
  </Button>
);

export default quizButton;