import { Link } from "react-router-dom";

const RouteNotFound = () => {
  return (
    <>
      <main className="not-found-main">
        <div className="not-found-background"></div>
        <Link className="return-link" to="/">
          Try again
        </Link>
        <h2 className="not-found-text">
          Oups... Something didn't go as expected...
        </h2>
      </main>
    </>
  );
};

export default RouteNotFound;
