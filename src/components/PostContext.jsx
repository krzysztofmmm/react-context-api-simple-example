import React, { useState, createContext } from "react";

export const PostContext = createContext();

export const PostProvider = (props) => {
  const [posts, setPosts] = useState([
    { title: "Hello, world!", content: "React context is great :)" },
    { title: "But...", content: "It's a little confusing at first!" },
  ]);

  return (
    <PostContext.Provider value={[posts, setPosts]}>
      {props.children}
    </PostContext.Provider>
  );
};
