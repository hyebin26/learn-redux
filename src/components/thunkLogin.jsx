import React from "react";

const ThunkLogin = ({ state, onLogin, onLogout }) => {
  const { isLogin, name } = state;
  return (
    <div>
      {isLogin ? (
        <div>
          <span>{name}님 안녕하세요</span>
          <button onClick={onLogout}>로그아웃</button>
        </div>
      ) : (
        <button onClick={onLogin}>로그인</button>
      )}
    </div>
  );
};

export default ThunkLogin;
