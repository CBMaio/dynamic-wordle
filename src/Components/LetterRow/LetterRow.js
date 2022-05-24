import { useState } from "react";
import TableContainer from "../TableContainer/TableContainer";

const LetterRow = ({ handleGame, word, userAttempts }) => {
  const [enableRow, setEnableRow] = useState(0); //la fila disponible en ese momento
  const n = userAttempts; //muestra la cantidad de filas segun intentos haya disponible

  const changeRow = (n) => {
    //cuando una fila se completa, se habilita la fila siguiente
    setEnableRow(enableRow + 1);
    if (enableRow + 1 > userAttempts - 1) {
      handleGame(true, false);
    }
  };

  return (
    <div>
      {[...Array(n)].map((el, index) => (
        <TableContainer
          word={word}
          id={index}
          key={index}
          enableRow={enableRow}
          changeRow={changeRow}
          handleGame={handleGame}
        />
      ))}
    </div>
  );
};

export default LetterRow;
