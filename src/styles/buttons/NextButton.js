import { styled } from '@mui/material/styles';
import { Button } from "@mui/material";
import { breakpoints } from '../../utils/breakpoints';

export const NextButton = styled(Button)(({ theme }) => {
  return {
    margin: "0 auto",
    color: "#fff",
    background: "#0b0e21",
    width: "300px",
    fontSize: "19px",
    fontWeight: 600,
    padding: "20px",
    textTransform: "uppercase",
    cursor: "pointer",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    borderRadius: 10,
    "&:hover": {
        background: theme.palette.grey[800]
    },
    [breakpoints.small]: {
      borderRadius: 20,
      padding: "10px",
      width: "100%"
    },
  };
});