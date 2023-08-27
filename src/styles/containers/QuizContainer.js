import { styled } from '@mui/material/styles';

export const QuizContainer = styled('div')(({ theme }) => ({
  width: '975px',
  margin: '0 auto',
  marginTop: '100px',
  background: '#fff',
  [theme.breakpoints.down('sm')]: {
    width: '325px'
  },
}));