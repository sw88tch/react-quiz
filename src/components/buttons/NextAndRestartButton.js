import React from "react";
import { Paper } from "@mui/material";
import { NextButton } from "../../styles/buttons/NextButton";
// import PropTypes from "prop-types";

const NextAndRestartButton = ({ onClick, children }) => {
  return (
    <NextButton onClick={onClick} component={Paper} elevation={7}>
      {children}
    </NextButton>
  );
};

// NextAndRestartButton.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   children: PropTypes.node.isRequired,
// };

export default NextAndRestartButton;