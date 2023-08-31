export function PostNew() {
  return (
    <form id="posts-new">
      <h1>New post</h1>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Title
        </label>
        <input type="text" className="form-control" id="exampleFormControlInput1" />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">
          Body
        </label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <button type="submit" className="btn btn-dark">
        Submit
      </button>
    </form>
  );
}
