import React, { useRef } from "react";

const ThunkLogin = ({ state, onLogin, onLogout, handleChange, inputName }) => {
  const { isLogin, name } = state;
  const inputRef = useRef();

  return (
    <div>
      {isLogin ? (
        <div>
          <span>{name}님 안녕하세요</span>
          <button onClick={onLogout}>로그아웃</button>
        </div>
      ) : (
        <form>
          <input type="text" onChange={handleChange} value={inputName} />
          <button onClick={onLogin}>로그인</button>
        </form>
      )}
    </div>
  );
};

export default ThunkLogin;
