import { useEffect, useState } from "react";
import CompareLength from "../CompareLength/CompareLength";
import Board from "../Board/Board";
import Attempts from "../Attempts/Attempts";
import TableContainer from "../TableContainer/TableContainer";
import LetterRow from "../LetterRow/LetterRow";

const Main = ({ handleGame }) => {
  const word = "hola";
  const [wordLength, setWordLength] = useState(); //longitud de la palabra
  const [userWord, setUserWord] = useState(); //palabra que ingresa el usuario
  const [correctLength, setCorrectLength] = useState(false); //boolean --> si userWord es de longitud correcta
  const [totalAttempts, setTotalAttempts] = useState(); //intentos totales que tiene el jugador
  const [userAttempts, setUserAttempts] = useState(); //intetnos disponibles del jugador

  const handleUserWord = (uWord) => {
    //almacena la palabra que ingresa el usuario en un estado
    setUserWord(uWord);
    if (uWord != word) {
      setUserAttempts(userAttempts - 1);
    } else {
      handleGame(true, true);
    }
  };

  const selectLength = () => {
    //determina la cantidad de letras que tiene la palabra
    setWordLength(word.length);
    setTotalAttempts(word.length + 1); //total de intentos
    setUserAttempts(word.length + 1); //inetnos disponibles que tiene el usuario
  };

  const isCorrect = (state) => {
    //una vez que se acierta la cantidad de letras, se setesa isCorrect a true
    setCorrectLength(state);
  };

  useEffect(() => selectLength(), []);

  return (
    <div>
      {!correctLength && <Board handleUserWord={handleUserWord} />}

      {!correctLength ? (
        <CompareLength
          word={word}
          userWord={userWord}
          wordLength={wordLength}
          isCorrect={isCorrect}
        />
      ) : (
        <Attempts
          userAttempts={userAttempts}
          totalAttempts={totalAttempts}
          wordLength={wordLength}
        />
      )}

      {correctLength && (
        <LetterRow
          handleGame={handleGame}
          userAttempts={userAttempts}
          word={word}
        />
      )}
    </div>
  );
};

export default Main;
