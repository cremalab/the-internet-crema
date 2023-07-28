import { Typography } from "@material-ui/core";
import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function BasicSwitches() {
  return (
    <>
      <Typography style={{ paddingInline: 0 }} variant="h4">
        Flick the Switch
      </Typography>
      <div style={{ padding: 40, paddingInline: 0 }}>
        <Switch {...label} defaultChecked />
        <Switch {...label} />
        <Switch {...label} disabled defaultChecked />
        <Switch {...label} disabled />
      </div>
    </>
  );
}
