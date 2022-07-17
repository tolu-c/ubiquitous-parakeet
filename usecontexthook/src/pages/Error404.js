import { Fragment } from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <Fragment>
      <div className="flex flex-col gap-y-2 items-center justify-center">
        <h2>Oops!!! This page is missing!</h2>
        <Link to="/" className="underline">Go back Home</Link>
      </div>
    </Fragment>
  );
};

export default Error404;
