import { useState, useEffect } from "react";
import axios from "axios";
import { PostNew } from "./PostNew";
import { PostIndex } from "./PostIndex";
import { Modal } from "./Modal";
import { PostShow } from "./PostShow";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";

export function Content() {
  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState({});

  const handleIndexPosts = () => {
    console.log("Handling index posts");
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  };
  useEffect(handleIndexPosts, []);

  const handleShowPost = (post) => {
    setIsPostsShowVisible(true);
    setCurrentPost(post);
  };

  const handleClose = () => {
    setIsPostsShowVisible(false);
  };

  const handleCreatePost = (params) => {
    axios.post("http://localhost:3000/posts.json", params).then((response) => {
      console.log(response.data);
      setPosts([...posts, response.data]);
    });
  };

  const handleUpdatePost = (id, params) => {
    axios.patch(`http://localhost:3000/posts/${id}.json`, params).then((response) => {
      console.log(response.data);
      setCurrentPost(response.data);
      setPosts(
        posts.map((post) => {
          if (post.id === id) {
            return response.data;
          } else {
            return post;
          }
        })
      );
    });
  };

  return (
    <div className="container">
      <LogoutLink />
      <Signup />
      <Login />
      <PostNew onCreatePost={handleCreatePost} />
      <br />

      <PostIndex posts={posts} onShowPost={handleShowPost} />
      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <PostShow post={currentPost} onUpdatePost={handleUpdatePost} />
      </Modal>
    </div>
  );
}
