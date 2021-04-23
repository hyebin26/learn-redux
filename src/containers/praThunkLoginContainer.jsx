import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PraThunkLogin from "../components/praThunkLogin";
import { getLogin } from "../modules/praThunkLogin";

const PraThunkLoginContainer = (props) => {
  const { isLogin, name } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const onClickButton = (data) => {
    dispatch(getLogin(data));
  };
  if (name) return <div>Hello {name}</div>;
  return <PraThunkLogin onClickButton={onClickButton} />;
};

export default PraThunkLoginContainer;
