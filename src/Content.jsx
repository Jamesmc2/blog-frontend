import { useState, useEffect } from "react";
import axios from "axios";
import { PostNew } from "./PostNew";
import { PostIndex } from "./PostIndex";
import { Modal } from "./Modal";
import { PostShow } from "./PostShow";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { Routes, Route } from "react-router-dom";
import { About } from "./About";
import { PostShowPage } from "./PostShowPage";

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
  const handleDeletePost = (id) => {
    axios.delete(`http://localhost:3000/posts/${id}.json`).then((response) => {
      console.log(response.data);
      handleClose();
      setPosts(posts.filter((post) => id !== post.id));
    });
  };

  return (
    <div className="container">
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PostIndex posts={posts} onShowPost={handleShowPost} />} />
        <Route path="/posts/new" element={<PostNew onCreatePost={handleCreatePost} />} />
        <Route path="/posts/:id" element={<PostShowPage />} />
      </Routes>

      <br />

      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <PostShow post={currentPost} onUpdatePost={handleUpdatePost} onDeletePost={handleDeletePost} />
      </Modal>
    </div>
  );
}
