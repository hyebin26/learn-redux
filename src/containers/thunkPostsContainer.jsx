import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ThunkPosts from "../components/thunkPosts";
import { getPosts } from "../modules/thunkGetPosts";

const ThunkPostsContainer = (props) => {
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((state) => state.posts);
  const { isLogin } = useSelector((state) => state.thunkLogin);
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  if (!isLogin) return null;
  if (isLoading) return <div>로딩중...</div>;
  if (!data) return null;

  return <ThunkPosts data={data} />;
};

export default ThunkPostsContainer;
