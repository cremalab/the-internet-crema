import { Box, Grid } from "@material-ui/core";

interface Props {
  children: React.ReactNode;
  width?: number;
}

export default function CustomContainer(props: Props) {
  const { children, width } = props;
  return (
    <Grid container alignItems="center" justifyContent="center">
      <Box width={width}>{children}</Box>
    </Grid>
  );
}
