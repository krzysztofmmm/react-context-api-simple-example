import CreatePost from "./components/CreatePost.jsx";
import Header from "./components/Header.jsx";
import Posts from "./components/Posts.jsx";
import "./App.css";

const APP_NAME = "Next-gen Social Media";

function App() {
  return (
    <>
      <Header appName={APP_NAME} />
      <CreatePost />
      <Posts />
    </>
  );
}

export { App };
