import { styled } from '@mui/system';
import { Typography } from '@mui/material';
import { breakpoints } from '../../../utils/breakpoints';

export const LetterMapBox = styled(({ isCorrectAnswer, isWrongAnswer, ...rest }) => (
  <Typography {...rest} />
))(({ isCorrectAnswer, isWrongAnswer }) => ({
  fontSize: '30px',
  backgroundColor: isCorrectAnswer ? '#1ea55b' : isWrongAnswer ? '#dc0a0a' : '#0094da',
  color: 'white',
  width: '70px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [breakpoints.small]: {
    fontSize: '24px',
    width: '50px'
  },
}));