import { Container, Typography } from "@mui/material";
import styledComponents from "styled-components";

const GameFinished = ({ isFinished }) => {
  return (
    <CustomContainer>
      <Typography variant="h3"> El juego ha terminado</Typography>
      {isFinished.finished && isFinished.winner ? (
        <Typography variant="h4" color={"success.light"}>
          Felicitaciones! Ganaste
        </Typography>
      ) : (
        <Typography variant="h4" color={"error.main"}>
          {" "}
          Buen intento! Sigue participando 😃
        </Typography>
      )}
    </CustomContainer>
  );
};

export default GameFinished;

const CustomContainer = styledComponents(Container)`
  {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-top: 5vh;
  }
`;
