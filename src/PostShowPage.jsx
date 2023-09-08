import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function PostShowPage() {
  const [post, setPost] = useState([]);
  const params = useParams();

  const getPost = () => {
    console.log("getting post");
    axios.get(`http://localhost:3000/posts/${params.id}.json`).then((response) => {
      console.log(response.data);
      setPost(response.data);
    });
  };
  useEffect(getPost, []);
  return (
    <div>
      <h1>This is the new Post show page</h1>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <img src={post.image} width={200}></img>
    </div>
  );
}
