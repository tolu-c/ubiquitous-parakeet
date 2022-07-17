import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex justify-between">
      <h2>useContext</h2>

      <ul className="flex gap-x-8">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
