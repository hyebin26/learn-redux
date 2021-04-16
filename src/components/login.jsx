import React from "react";

const Login = ({ user, hello }) => {
  console.log(hello);
  const handleClick = () => {
    hello();
  };
  return (
    <>
      <button onClick={handleClick}>로그인!</button>
    </>
  );
};

export default Login;
