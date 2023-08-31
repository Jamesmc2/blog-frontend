export function PostShow(props) {
  return (
    <div>
      <p>Current post id: {props.recipe.id}</p>
      <p>Current post auther id: {props.recipe.user_id}</p>
      <p>Current post Title: {props.recipe.title}</p>
      <p>Current post Body: {props.recipe.body}</p>
      <p>Current post Image URL: {props.recipe.image}</p>
    </div>
  );
}
