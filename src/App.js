import logo from "./logo.svg";
import "./App.css";
import Main from "./Components/Main/Main";
import { useState } from "react";
import GameFinished from "./Components/GameFinished/GameFinished";

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
    <div>
      {!isFinished.finished ? (
        <Main handleGame={handleGame} />
      ) : (
        <GameFinished isFinished={isFinished} />
      )}
    </div>
  );
}

export default App;
