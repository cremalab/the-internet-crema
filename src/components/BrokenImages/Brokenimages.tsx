import { Typography } from "@material-ui/core";

const imgStyle = {
  width: "120px",
  height: "90px",
};

const BrokenImages = () => (
  <>
    <Typography variant="h4">Broken Images</Typography>
    <img style={imgStyle} src="asdf.jpg" />
    <img style={imgStyle} src="hjkl.jpg" />
    <img style={imgStyle} src="img/avatar-blank.jpg" />
  </>
);

export default BrokenImages;
