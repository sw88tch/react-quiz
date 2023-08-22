import { styled } from '@mui/material/styles';

export const Score = styled("div")(({ theme }) => ({
  background: "#0094da",
  color: "#fff",
  fontSize: "18px",
  width: "200px",
  margin: "0 auto",
  fontWeight: 600,
  height: "40px",
  marginBottom: "30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "10px",

  [theme.breakpoints.down('sm')]: {
    fontSize: "14px",
    width: "150px",
    height: "30px",
    marginBottom: "20px"
  },
}));