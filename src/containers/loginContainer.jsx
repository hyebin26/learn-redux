import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Login from "../components/login";
import { login } from "../modules/login";

const LoginContainer = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state);
  const hello = dispatch(login);
  return <Login user={user} hello={hello} />;
};

export default LoginContainer;
