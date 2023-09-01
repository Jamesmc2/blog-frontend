export function PostShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdatePost(props.post.id, params);
  };

  const handleDelete = () => {
    props.onDeletePost(props.post.id);
  };
  return (
    <div>
      <p>Current post id: {props.post.id}</p>
      <p>Current post auther id: {props.post.user_id}</p>
      <p>Current post Title: {props.post.title}</p>
      <p>Current post Body: {props.post.body}</p>
      <p>Current post Image URL: {props.post.image}</p>
      <button onClick={handleDelete}>Delete</button>
      <form id="posts-edit" onSubmit={handleSubmit}>
        <h1>Edit post</h1>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input name="title" type="text" className="form-control" id="title" defaultValue={props.post.title} />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Body
          </label>
          <textarea name="body" className="form-control" id="body" rows="3" defaultValue={props.post.body}></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="url" className="form-label">
            Image url
          </label>
          <input name="image" type="text" className="form-control" id="url" defaultValue={props.post.image} />
        </div>
        <button type="submit" className="btn btn-dark">
          Edit post
        </button>
      </form>
    </div>
  );
}
