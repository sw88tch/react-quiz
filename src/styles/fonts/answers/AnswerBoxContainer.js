import { styled } from '@mui/system';
import { Typography } from '@mui/material';
import { getAnswerClass } from '../../../utils/answerClass';

export const AnswerBoxContainer = styled(({ isCorrectAnswer, isWrongAnswer, ...rest }) => (
    <Typography {...rest} />
  ))(({ theme, isCorrectAnswer, isWrongAnswer }) => {
  
    return {
      width: '100%',
      maxWidth: '48%',
      background: '#fff',
      border: '2px solid',
      borderColor: '#0094da',
      minHeight: '70px',
      cursor: 'pointer',
      marginBottom: '30px',
      display: 'flex',
      [theme.breakpoints.down('sm')]: {
        maxWidth: '100%',
      },
      [`&.${getAnswerClass({ isCorrectAnswer, isWrongAnswer })}`]: {
        borderColor: isCorrectAnswer ? '#1ea55b' : isWrongAnswer ? '#dc0a0a' : '#0094da',
      },
    };
  });