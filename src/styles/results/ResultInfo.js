import { styled } from '@mui/material/styles';

export const ResultInfo = styled("div")(({ theme }) => ({
  marginTop: "30px",
  fontSize: "20px",
  color: "#fff",

  [theme.breakpoints.down('sm')]: {
    marginTop: "20px",
    fontSize: "16px"
  },
}));