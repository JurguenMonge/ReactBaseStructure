//Libraries
import { Link } from "react-router-dom";

//CSS
import "../../assets/css/login.css";

export default function Login() {
  return (
    <div className="container">
      <h1>Login Page</h1>
      <label>Email</label>
      <input type="email" />
      <label>Password</label>
      <input type="password" />
      <button>Login</button>
      <Link to="/characters" className="link">
        View Rick and Morty
      </Link>
    </div>
  );
}
