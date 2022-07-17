import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../store/auth-context";

const LoginForm = () => {
  const authCtx = useContext(AuthContext);
  const login = authCtx.login;
  const navigate = useNavigate();
  const [disable, setDisable] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // simple form validation
  useEffect(() => {
    if (username.trim().length > 0 && password.trim().length > 5) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [username, password]);

  const submitHandler = (event) => {
    event.preventDefault();
    login();

    // clears form after submission
    setUsername("");
    setPassword("");

    // navigate to about page after login
    navigate("/about");
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col gap-y-4 justify-center w-3/4 md:w-1/2 border bg-white shadow-md rounded-md p-4"
    >
      <div className="flex flex-col gap-y-2">
        <label
          htmlFor="username"
          className="capitalize text-xl font-sans font-bold text-slate-800"
        >
          username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-y-2">
        <label
          htmlFor="password"
          className="capitalize text-xl font-sans font-bold text-slate-800"
        >
          password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div>
        <button
          type="submit"
          className="bg-blue-800 hover:bg-blue-900 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold capitalize text-lg flex items-center justify-center h-12 w-full"
          disabled={disable}
        >
          submit
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
