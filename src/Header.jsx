import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";
import { useEffect, useState } from "react";
import axios from "axios";

export function Header() {
  let authenticationLinks;
  const [user, setUser] = useState({});
  let welcomeMessage;

  const getUser = () => {
    axios.get("http://localhost:3000/users/current.json").then((response) => setUser(response.data));
  };
  useEffect(getUser, []);

  if (localStorage.jwt === undefined) {
    welcomeMessage = "Blog Website";
    authenticationLinks = (
      <>
        <li className="nav-item">
          <Link to="/signup" className="nav-link">
            Sign up
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Log in
          </Link>
        </li>
      </>
    );
  } else {
    welcomeMessage = `Welcome ${user.name}`;
    authenticationLinks = (
      <>
        <li className="nav-item">
          <LogoutLink />
        </li>
      </>
    );
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {welcomeMessage}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            {authenticationLinks}

            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/posts/new" className="nav-link">
                New post
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-secondary" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
