import { useState } from "react";

export function PostIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      <input type="text" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)}></input>
      {props.posts
        .filter((post) => post.title.toLowerCase().includes(searchFilter.toLowerCase()))
        .map((post) => (
          <div key={post.title} className="posts container p-3">
            <h2>
              {post.title}
              <span className="badge bg-secondary">New</span>
            </h2>
            <p>{post.body}</p>
            <img src={post.image} alt="" />
            <br />
            <button onClick={() => props.onShowPost(post)}>More info</button>
            <a href={`/posts/${post.id}`}>Go to page</a>
          </div>
        ))}
    </div>
  );
}
