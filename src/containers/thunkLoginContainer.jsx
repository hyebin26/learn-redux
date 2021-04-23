import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ThunkLogin from "../components/thunkLogin";
import { login, logout } from "../modules/thunkLogin";

const ThunkLoginContainer = (props) => {
  const [name, setName] = useState("");

  const state = useSelector((state) => state.thunkLogin);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setName(e.target.value);
  };
  const onLogout = () => {
    dispatch(logout());
  };
  const onLogin = (e) => {
    e.preventDefault();
    dispatch(login(name));
  };
  return (
    <ThunkLogin
      state={state}
      onLogin={onLogin}
      onLogout={onLogout}
      handleChange={handleChange}
      inputName={name}
    />
  );
};

export default ThunkLoginContainer;
