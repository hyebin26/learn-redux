import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PraThunkPosts from "../components/praThunkPosts";
import { getPosts } from "../modules/praThunkGetPosts";

const PreThunkPostsContainer = (props) => {
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  if (isLoading) return <div>로딩중..</div>;
  return data.map((item) => <PraThunkPosts item={item} />);
};

export default PreThunkPostsContainer;
