import { useState } from "react";

const Board = ({ handleUserWord }) => {
  //muestra un tablero y envia la palabra al componente Main
  const [word, setWord] = useState("");

  const sendWord = (e) => {
    e.preventDefault();
    handleUserWord(word); //envia a Main la palabra que ingresó el usuario

    //limpia el formulario una vez que se manda una palabra
    e.target.reset();
  };

  const handleWord = (e) => {
    const inputWord = e.target.value.toLowerCase();
    setWord(inputWord);
  };

  return (
    <div>
      <h2> tablero de juego </h2>
      <div>
        <form onSubmit={sendWord}>
          <input
            name="Word"
            type="text"
            placeholder="Escriba una palabra"
            onChange={handleWord}
          />
          <button type="submit"> Enviar </button>
        </form>
      </div>
    </div>
  );
};

export default Board;
