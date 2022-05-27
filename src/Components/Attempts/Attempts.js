import { Typography } from "@mui/material";
import styledComponents from "styled-components";

const Attempts = ({ userAttempts, totalAttempts, wordLength }) => {
  return (
    <AttemptsContainer>
      <Typography variant="h4">TOTAL DE INTENTOS: {totalAttempts} </Typography>
      <Typography variant="h5">
        Intentos disponibles: {userAttempts}{" "}
      </Typography>
    </AttemptsContainer>
  );
};

export default Attempts;

const AttemptsContainer = styledComponents.div`
  {
    margin: 3rem auto;
  }
`;
