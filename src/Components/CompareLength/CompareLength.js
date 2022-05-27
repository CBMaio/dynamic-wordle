import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import styledComponents from "styled-components";

const CompareLength = ({ word, userWord = "", wordLength, isCorrect }) => {
  const [userLength, setUserLength] = useState();

  const selectUserLegth = () => {
    //selecciona la longitud de la palabra que escribe el usuario
    setUserLength(userWord.length);
    if (wordLength == userWord.length) {
      setInterval(() => {
        isCorrect(true, userWord);
      }, 1000);
    }
  };

  useEffect(() => {
    selectUserLegth();
  }, [userWord]);

  return (
    <div>
      <CustomTitle variant="h4">
        Veamos la longitud de la palabra...
      </CustomTitle>
      {userWord != "" && (
        <Typography variant="h5" color={"primary"}>
          {wordLength == userLength
            ? "Esa cantidad de letras es Correcta! "
            : wordLength > userLength
            ? "Esa palabra parece muy corta... Intenta con más letras"
            : "Demasiadas letras! Intenta con algo más corto"}
        </Typography>
      )}
      <Typography variant="h5">{userWord}</Typography>
    </div>
  );
};

export default CompareLength;

const CustomTitle = styledComponents(Typography)`
  color: var(--black);
  margin-bottom: 2rem!important;
`;
