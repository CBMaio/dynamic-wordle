import { useEffect, useState } from "react";

const CompareLength = ({ word, userWord = "", wordLength, isCorrect }) => {
  const [userLength, setUserLength] = useState();

  const selectUserLegth = () => {
    //selecciona la longitud de la palabra que escribe el usuario
    setUserLength(userWord.length);
    if (wordLength == userWord.length) {
      setInterval(() => {
        isCorrect(true);
      }, 1000);
    }
  };

  useEffect(() => {
    selectUserLegth();
  }, [userWord]);

  return (
    <div>
      <h4>Comparemos... 👀</h4>
      {userWord != "" && (
        <p>
          {wordLength == userLength
            ? "Esa cantidad de letras es Correcta! "
            : wordLength > userLength
            ? "Esa palabra parece muy corta... Intenta con más letras"
            : "Demasiadas letras! Intenta con algo más corto"}
        </p>
      )}
      <p>{userWord}</p>
    </div>
  );
};

export default CompareLength;
