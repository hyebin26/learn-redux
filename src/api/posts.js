const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

const posts = [
  {
    id: 1,
    content: "안녕하세요",
  },
  {
    id: 2,
    content: "그렇군요",
  },
  {
    id: 3,
    content: "잘가세요",
  },
];

export const getPostsAPI = async () => {
  await sleep(1000);
  return posts;
};
