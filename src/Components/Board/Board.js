import { Typography } from "@mui/material";
import { style } from "@mui/system";
import { useState } from "react";
import styledComponents from "styled-components";

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
    <div className="board-section">
      <TitleContainer>
        <Typography variant="h2"> Dynamic Wordle </Typography>
      </TitleContainer>
      <FormContainer>
        <form onSubmit={sendWord}>
          <BigInput name="Word" type="text" autoFocus onChange={handleWord} />
          {/* <button type="submit"> Enviar </button> */}
        </form>
      </FormContainer>
    </div>
  );
};

export default Board;

const TitleContainer = styledComponents.div`
  {
    margin-top: 25vh;
    margin-bottom: 5vh;
  }
`;

const FormContainer = styledComponents.div`
   {
    margin-bottom: 5vh;
  }
`;

const BigInput = styledComponents.input`
  {
    font-size: 4rem;
    border: none;
    outline: none;
    border-bottom: 1px solid rgba(0, 0, 0, .5);
    letter-spacing: 5px;
    color: var(--black);

    &:focus {
      outline: none;
    }
  }
`;
