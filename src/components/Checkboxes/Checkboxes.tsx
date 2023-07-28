import Checkbox from "@material-ui/core/Checkbox";
import { Box, Typography } from "@material-ui/core";
import React from "react";

export default function Checkboxes() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      <Typography style={{ paddingBottom: 5 }} variant="h4">
        Check Boxes
      </Typography>
      <Box
        data-testid="Checkbox-container"
        style={{ backgroundColor: "white", padding: 20 }}
      >
        <Checkbox
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "primary checkbox" }}
        />
        <Checkbox
          defaultChecked
          color="primary"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
        <Checkbox inputProps={{ "aria-label": "uncontrolled-checkbox" }} />
        <Checkbox disabled inputProps={{ "aria-label": "disabled checkbox" }} />
        <Checkbox
          disabled
          checked
          inputProps={{ "aria-label": "disabled checked checkbox" }}
        />
        <Checkbox
          defaultChecked
          indeterminate
          inputProps={{ "aria-label": "indeterminate checkbox" }}
        />
        <Checkbox
          defaultChecked
          color="default"
          inputProps={{ "aria-label": "checkbox with default color" }}
        />
        <Checkbox
          defaultChecked
          size="small"
          inputProps={{ "aria-label": "checkbox with small size" }}
        />
      </Box>
    </>
  );
}
