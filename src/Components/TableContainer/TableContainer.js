import { red } from "@mui/material/colors";
import { useEffect, useState } from "react";
import styledComponents from "styled-components";
import InputBox from "./InputBox";

const TableContainer = ({
  autocomplete,
  id,
  word,
  enableRow,
  changeRow,
  handleGame,
}) => {
  const [elements, setElements] = useState([]); //cantidad de letras que tiene la palabra
  let refs = []; //array de inputs
  let firstRef = []; //array de la primer referencia, autocomplete

  const validateLetter = (letter) => {
    //solo reconoce letras
    const validLetter = new RegExp("^[a-zA-Z]");
    const isCorrect = validLetter.test(letter);
    return isCorrect;
  };

  const handleInput = (event, id) => {
    const isCorrect = validateLetter(refs[id].ref.value); //valida si la letra ingresada es correcta
    if (isCorrect && event.code != "Backspace") {
      //si ingresa una letra, se habilita el input siguienta y deshabilita el actual
      refs[id].value = refs[id].ref.value;
      if (id < word.length - 1) {
        refs[id + 1].ref.disabled = false;
        refs[id].ref.disabled = true;
        refs[id + 1].ref.focus();
      }
    }
    if (id > 0 && id <= word.length - 1 && event.code == "Backspace") {
      //si se borra una letra, se habilita el input anterior
      refs[id].ref.disabled = true;
      refs[id - 1].ref.disabled = false;
      refs[id - 1].ref.focus();
    }

    if (
      validateLetter(refs[word.length - 1].ref.value) &&
      event.code == "Enter"
    ) {
      //si se presiona "enter" y la ultima letra del formulario es correcta, se valida el array de inputs
      validateForm();
    }
  };

  const createElements = () => {
    let count = [];
    for (let i = 0; i < word.length; i++) {
      count.push(i);
    }
    setElements(count);
    if (autocomplete) {
      validLetter();
    }
  };

  const validLetter = () => {
    const userWord = autocomplete.join("");
  };

  const validateForm = () => {
    refs[word.length - 1].ref.disabled = true; //deshabilita el último input
    let wordForm = "";
    let letter = "";
    for (let index = 0; index < refs.length; index++) {
      const element = refs[index];
      letter = element.ref.value.toLowerCase();
      wordForm += letter;

      //evalua la palabra ingresada con la palabra que se busca y se agrega un estilo dependiendo si pertenece y la posicion
      if (letter == word[index]) {
        element.correct = 1;
        element.ref.style.backgroundColor = "var(--color-correct)";
      } else if (word.includes(letter)) {
        element.ref.style.backgroundColor = "var(--color-present)";
      } else {
        element.ref.style.backgroundColor = "var(--color-absent)";
      }

      element.ref.style.color = "#ffffff";
    }

    if (wordForm == word) {
      setInterval(() => {
        handleGame(true, true);
      }, 1000);
    } else {
      changeRow(id + 1); //se habilita la fila siguiente
    }
  };

  useEffect(() => {
    createElements();
  }, []);

  const position = (e, i) => {
    let color = "";
    if (e == word[i]) {
      color = "var(--color-correct)";
    } else if (word.includes(e)) {
      color = "var(--color-present)";
    } else {
      color = "var(--color-absent)";
    }

    return color;
  };

  return (
    <div>
      <div>
        {autocomplete ? (
          autocomplete.map((e, i) => (
            <CustomInput
              maxLength={1}
              name={i}
              type="text"
              value={e}
              key={i}
              disabled={true}
              style={{ color: "var(--white)", background: position(e, i) }}
            />
          ))
        ) : (
          <form onSubmit={validateForm}>
            <fieldset disabled={enableRow != id} style={{ border: "none" }}>
              {elements.map((e, i) => (
                <CustomInput
                  maxLength={1}
                  name={i}
                  type="text"
                  autoFocus={i == 0 && true}
                  onKeyUp={(event) => handleInput(event, i)}
                  key={i}
                  disabled={i != 0 && true}
                  ref={(ref) => (refs[i] = { ref, value: "" })}
                />
              ))}
            </fieldset>
          </form>
        )}
      </div>
    </div>
  );
};

export default TableContainer;

const CustomInput = styledComponents.input`
  {
    // border: 1px solid;
    width: 50px;
    font-size: 2.75rem;
    margin: 5px 10px;
    text-align: center;
    outline: none;
    background; transparent;
    border: none;
    border-bottom: 1px solid bar(--black);
    padding: 10px;
    font-family; "Roboto";
    border-radius: 5px;
  }
`;
