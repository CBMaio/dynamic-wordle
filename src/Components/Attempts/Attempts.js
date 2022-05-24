const Attempts = ({ userAttempts, totalAttempts, wordLength }) => {
  return (
    <div>
      <p>TOTAL DE INTENTOS: {totalAttempts} </p>
      <p>Intentos disponibles: {userAttempts} </p>
    </div>
  );
};

export default Attempts;
