import { styled } from '@mui/material/styles';
import { breakpoints } from '../../utils/breakpoints';

export const AnswersContainer = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  marginTop: '50px',
  [breakpoints.small]: {
    flexDirection: 'column'
  },
});