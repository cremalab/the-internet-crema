import { Container, Typography } from "@material-ui/core";

const Dropdown = () => (
  <Container maxWidth="md">

      <Typography> Dropdown </Typography>
      <select value="Radish">
        <option value="Orange">Orange</option>
        <option value="Radish">Radish</option>
        <option value="Cherry">Cherry</option>
      </select>

  </Container>
)

export default Dropdown
