import { useRouteError, Link } from "react-router-dom";

const ErrorBoundary = () => {
  const error = useRouteError();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Oops! Something went wrong.</h1>
      <p>{error.message}</p>
      <p>
        Please go to <Link to="/login" style={{textDecoration:'none', color:'blue'}}> Login</Link> and try again.
      </p>
    </div>
  );
};

export default ErrorBoundary;
