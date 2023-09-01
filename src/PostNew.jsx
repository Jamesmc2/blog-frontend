export function PostNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreatePost(params);
    event.target.reset();
  };
  return (
    <form id="posts-new" onSubmit={handleSubmit}>
      <h1>New post</h1>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input name="title" type="text" className="form-control" id="title" />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Body
        </label>
        <textarea name="body" className="form-control" id="body" rows="3"></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="url" className="form-label">
          Image url
        </label>
        <input name="image" type="text" className="form-control" id="url" />
      </div>
      <button type="submit" className="btn btn-dark">
        Submit
      </button>
    </form>
  );
}
