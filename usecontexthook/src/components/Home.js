import { Fragment } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col gap-y-8">
      <h3>This is the homepage</h3>

      <h4>Links for you to test the loggedIn state</h4>
      <div className="flex flex-col gap-y-1 text-blue-600 underline">
        <Link to="about">About</Link>
        <Link to="login">login</Link>
      </div>
    </div>
  );
};

export default Home;
