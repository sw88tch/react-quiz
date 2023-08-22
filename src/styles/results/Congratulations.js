import { styled } from '@mui/material/styles';

export const Congratulations = styled("h2")(({ theme }) => ({
  background: "#004877",
  padding: "20px",
  fontSize: "36px",
  color: "#fff",
  borderRadius: "30px",
  [theme.breakpoints.down('sm')]: {
    padding: "10px",
    fontSize: "24px"
  }
}));