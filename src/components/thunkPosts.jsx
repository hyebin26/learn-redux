import React from "react";

const ThunkPosts = ({ data, onGetPosts }) => {
  return (
    <ul>
      {data.map((post) => (
        <li>{post.content}</li>
      ))}
    </ul>
  );
};

export default ThunkPosts;
