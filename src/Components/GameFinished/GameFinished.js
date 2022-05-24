const GameFinished = ({ isFinished }) => {
  return (
    <div>
      <h4> el juego ha terminado</h4>
      {isFinished.finished && isFinished.winner ? (
        <h5>Felicitaciones! Ganaste</h5>
      ) : (
        <h5> Buen intento! Sigue participando 😃</h5>
      )}
    </div>
  );
};

export default GameFinished;
