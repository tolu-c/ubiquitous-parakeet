import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center h-[15vh] px-4 md:px-8 w-full bg-blue-800 text-white">
      <h2 className="text-xl md:text-4xl font-bold">
        <Link to="/">useContext</Link>
      </h2>

      <ul className="flex gap-x-8">
        <li className="text-sm md:text-lg hover:underline">
          <Link to="/">Home</Link>
        </li>
        <li className="text-sm md:text-lg hover:underline">
          <Link to="about">About</Link>
        </li>
        <li className="text-sm md:text-lg hover:underline">
          <Link to="login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
