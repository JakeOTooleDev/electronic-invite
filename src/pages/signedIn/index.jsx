import { Link } from "react-router-dom";

export const SignedInPage = () => {
  return (
    <div>
      <h1>You are now signed in!</h1>
      <Link to={"/"}>Go Back Home</Link>
    </div>
  );
};
