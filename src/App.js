import logo from "./logo.svg";
import "./App.css";
import Main from "./Components/Main/Main";
import { useState } from "react";
import GameFinished from "./Components/GameFinished/GameFinished";
import { Container } from "@mui/material";

function App() {
  const [isFinished, setIsFinished] = useState({
    finished: false,
    winner: false,
  });

  const handleGame = (finish, win) => {
    setIsFinished({
      finished: finish,
      winner: win,
    });
  };
  return (
    <Container>
      {!isFinished.finished ? (
        <Main handleGame={handleGame} />
      ) : (
        <GameFinished isFinished={isFinished} />
      )}
    </Container>
  );
}

export default App;
