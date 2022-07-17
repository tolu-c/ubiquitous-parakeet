import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../store/auth-context";

const NavBar = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const logout = authCtx.logout;

  return (
    <nav className="flex justify-between items-center h-[15vh] px-4 md:px-8 w-full bg-blue-800 text-white">
      <h2 className="text-xl md:text-4xl font-bold">
        <Link to="/">useContext</Link>
      </h2>

      <ul className="flex gap-x-8">
        <li className="text-sm md:text-lg hover:underline">
          <Link to="/">Home</Link>
        </li>
        {isLoggedIn && (
          <>
            <li className="text-sm md:text-lg hover:underline">
              <Link to="about">About</Link>
            </li>
            <li
              className="text-sm md:text-lg hover:underline cursor-pointer"
              onClick={logout}
            >
              Logout
            </li>
          </>
        )}

        {!isLoggedIn && (
          <li className="text-sm md:text-lg hover:underline">
            <Link to="login">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
