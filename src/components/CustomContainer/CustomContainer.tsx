import { Box, Grid } from "@material-ui/core";

interface Props {
  children: React.ReactNode;
}

export default function CustomContainer(props: Props) {
  const { children } = props;
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Box>{children}</Box>
    </Grid>
  );
}
