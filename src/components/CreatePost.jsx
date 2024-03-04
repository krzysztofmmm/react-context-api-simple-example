import { useState, useEffect, useContext } from "react";
import { PostContext } from "./PostContext.jsx";

const INITIAL_POST = {
  title: "",
  content: "",
};

export default function CreatePost() {
  const [post, setPost] = useState(() => {
    const savedPost = localStorage.getItem("post");
    if (savedPost) {
      return JSON.parse(savedPost);
    } else {
      return INITIAL_POST;
    }
  });
  const [posts, setPosts] = useContext(PostContext);

  useEffect(() => {
    localStorage.setItem("post", JSON.stringify(post));
  }, [post]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPosts([...posts, post]);
    setPost(INITIAL_POST);
    localStorage.removeItem("post");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          name="title"
          onChange={handleChange}
          value={post.title}
        ></input>
      </label>
      <br />
      <label>
        Content:
        <textarea
          name="content"
          onChange={handleChange}
          value={post.content}
          cols={50}
          rows={5}
        ></textarea>
      </label>
      <br />
      <input type="submit" value="Post!"></input>
    </form>
  );
}
