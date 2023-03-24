import { Container, Typography } from "@material-ui/core";
import CustomContainer from "../CustomContainer";

const imgStyle = {
  width: "120px",
  height: "90px",
};

const BrokenImages = () => (
  <CustomContainer>
    <Container style={{ paddingTop: "50px" }}>
      <Typography variant="h4">Broken Images</Typography>

      <img style={imgStyle} src="asdf.jpg" />
      <img style={imgStyle} src="hjkl.jpg" />
      <img style={imgStyle} src="img/avatar-blank.jpg" />
    </Container>
  </CustomContainer>
);

export default BrokenImages;
