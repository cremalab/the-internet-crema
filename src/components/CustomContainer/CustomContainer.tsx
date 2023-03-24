import { Box, Grid } from "@material-ui/core";

interface Props {
  children: React.ReactNode;
  width?: number;
}

export default function CustomContainer(props: Props) {
  const { children, width } = props;
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      alignContent="center"
      style={{ minHeight: "70vh" }}
    >
      <Box width={width}>{children}</Box>
    </Grid>
  );
}
