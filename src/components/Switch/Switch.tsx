import { Typography } from "@material-ui/core";
import Switch from "@mui/material/Switch";
import CustomContainer from "../CustomContainer";

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function BasicSwitches() {
  return (
    <CustomContainer>
      <Typography style={{ padding: 30, paddingInline: 45 }} variant="h4">
        Switches
      </Typography>
      <div>
        <Switch {...label} defaultChecked />
        <Switch {...label} />
        <Switch {...label} disabled defaultChecked />
        <Switch {...label} disabled />
      </div>
    </CustomContainer>
  );
}
