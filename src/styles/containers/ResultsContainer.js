import { styled } from '@mui/material/styles';

export const ResultsContainer = styled("div")(({ theme }) => ({
  background: "#0094da",
  height: "300px",
  textAlign: "center",
  borderRadius: "30px",
  [theme.breakpoints.down('sm')]: {
    height: "135px",
    borderRadius: "20px",
  },
}));