const InputBox = ({ handleInput, id }) => {
  const validLetter = new RegExp("^[a-zA-Z]");
  const press = (e) => {
    // console.log(e.target.value);
    const letter = e.target.value;
    validLetter.test(letter) && handleInput(parseInt(e.target.name));
  };

  return (
    <input
      maxLength={1}
      name={id}
      type="text"
      // autoFocus={focus}
      onKeyUp={press}
    />
  );
};

export default InputBox;
