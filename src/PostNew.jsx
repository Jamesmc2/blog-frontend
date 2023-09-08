import { useState } from "react";

export function PostNew(props) {
  const [title, setTitle] = useState("");
  let validationMessage;
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreatePost(params);
    event.target.reset();
    window.location.href = "/";
  };
  if (title.length > 30) {
    validationMessage = <small>The post title is too long</small>;
  } else if (title.length === 30) {
    validationMessage = <small>The post title is at max length</small>;
  } else if (title.length < 5) {
    validationMessage = <small>The post title is too short</small>;
  } else {
    validationMessage = <small>{30 - title.length} characters remaining</small>;
  }
  return (
    <form id="posts-new" onSubmit={handleSubmit}>
      <h1>New post</h1>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          name="title"
          type="text"
          className="form-control"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        {validationMessage}
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
