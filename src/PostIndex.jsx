export function PostIndex(props) {
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      {props.posts.map((post) => (
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
