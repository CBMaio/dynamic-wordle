import { useEffect, useState } from "react";
import CompareLength from "../CompareLength/CompareLength";
import Board from "../Board/Board";
import Attempts from "../Attempts/Attempts";
import TableContainer from "../TableContainer/TableContainer";
import LetterRow from "../LetterRow/LetterRow";
import "./main.css";
import { useGet } from "../../customHook/useGet";

const Main = ({ handleGame }) => {
  // let word = "hola";
  const [word, setWord] = useState("");
  const [wordLength, setWordLength] = useState(); //longitud de la palabra
  const [userWord, setUserWord] = useState(); //palabra que ingresa el usuario
  const [correctLength, setCorrectLength] = useState(false); //boolean --> si userWord es de longitud correcta
  const [totalAttempts, setTotalAttempts] = useState(); //intentos totales que tiene el jugador
  const [userAttempts, setUserAttempts] = useState(); //intetnos disponibles del jugador
  const [firstAttempt, setFirstAttempt] = useState([]);
  const [getData, response] = useGet();
  const BASE_URL =
    "https://palabras-aleatorias-public-api.herokuapp.com/random";

  const getWord = async () => {
    const { data } = await getData(BASE_URL);

    if (data) {
      const randomWord = data.body.Word;
      checkAccents(randomWord);
      setWord(randomWord);
      selectLength(randomWord);
      // setWordLength(randomWord.length);
      // setUserAttempts(randomWord.length);
    }
  };

  const checkAccents = (word) => {
    //si la palabra tiene una tilde, busco una nueva
    let accents = false;
    const vocales = ["á", "é", "í", "ó", "ú"];
    let count = 0;
    while (count < word.length && accents == false) {
      if (vocales.includes(word[count])) {
        accents = true;
      }
      count++;
    }

    if (accents) {
      getWord();
    }
  };

  const handleUserWord = (uWord) => {
    //almacena la palabra que ingresa el usuario en un estado
    setUserWord(uWord);
    if (uWord != word) {
      setUserAttempts(userAttempts - 1);
    } else {
      handleGame(true, true);
    }
  };

  const selectLength = (randomWord) => {
    //determina la cantidad de letras que tiene la palabra
    setWordLength(randomWord.length);
    setTotalAttempts(randomWord.length + 1); //total de intentos
    setUserAttempts(randomWord.length + 1); //inetnos disponibles que tiene el usuario
  };

  const isCorrect = (state, attempt) => {
    //una vez que se acierta la cantidad de letras, se setesa isCorrect a true
    setCorrectLength(state);
    setFirstAttempt(attempt.split(""));
  };

  useEffect(() => {
    getWord();
    // selectLength();
  }, []);

  return (
    <div className="main-container">
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
          firstAttempt={firstAttempt}
          handleGame={handleGame}
          userAttempts={userAttempts}
          word={word}
        />
      )}
    </div>
  );
};

export default Main;
