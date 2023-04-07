import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <>
      <h3>Not Found</h3>
      <p>
        The page you're looking for does not exist. How embarrassing for you.
      </p>
      <p>
        <Link to="/">Click here</Link> to go to the home page.
      </p>
    </>
  );
}

export { PageNotFound };
export default PageNotFound;
