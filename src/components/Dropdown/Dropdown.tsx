import { Container, Typography } from "@material-ui/core";

const Dropdown = () => (
  <Container maxWidth="md" style={{paddingTop: '50px'}}>

      <Typography variant="h2"> Dropdown </Typography>
      <select value="Radish">
        <option value="Orange">Orange</option>
        <option value="Radish">Radish</option>
        <option value="Cherry">Cherry</option>
      </select>

  </Container>
)

export default Dropdown
