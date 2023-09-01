import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="signup">
      <h1>Signup</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" className="form-control" />
        </div>
        <div>
          Email: <input name="email" type="email" className="form-control" />
        </div>
        <div>
          Password: <input name="password" type="password" className="form-control" />
        </div>
        <div>
          Password confirmation: <input name="password_confirmation" type="password" className="form-control" />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}