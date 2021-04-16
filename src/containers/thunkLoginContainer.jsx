import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ThunkLogin from "../components/thunkLogin";
import { login, logout } from "../modules/thunkLogin";

const ThunkLoginContainer = (props) => {
  const state = useSelector((state) => state.thunkLogin);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };
  const onLogin = () => {
    dispatch(login());
  };
  return <ThunkLogin state={state} onLogin={onLogin} onLogout={onLogout} />;
};

export default ThunkLoginContainer;
