import React, { useState } from "react";

const PraThunkLogin = ({ onClickButton }) => {
  const [name, setName] = useState("");
  const onChangeInput = (e) => {
    setName(e.target.value);
  };
  const clickButton = (e) => {
    e.preventDefault();
    onClickButton(name);
  };
  return (
    <form>
      <input type="text" value={name} onChange={onChangeInput} />
      <button onClick={clickButton}>확인</button>
    </form>
  );
};

export default PraThunkLogin;
