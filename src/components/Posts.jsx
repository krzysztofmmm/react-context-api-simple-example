import { useContext } from "react";
import { PostContext } from "./PostContext.jsx";

export default function Posts() {
  const [posts, setPosts] = useContext(PostContext);

  return (
    <>
      {posts.map((post, index) => {
        return (
          <div className="card" key={index}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        );
      })}
    </>
  );
}
