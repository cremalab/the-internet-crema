import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import robsworld from "../../assets/robsworld.png";

function PageNotFound() {
  return (
    <>
      <Typography style={{ paddingBottom: 40 }} variant="h4">
        Welcome to Rob's World©
      </Typography>
      <div>
        <img src={robsworld} alt="rob" />
      </div>
      <p>
        The page you're looking for does not exist. How embarrassing for you.
      </p>
      <p>
        <Link to="/">Click here</Link> to leave Rob's world.
      </p>
    </>
  );
}

export { PageNotFound };
export default PageNotFound;
