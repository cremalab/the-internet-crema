import Switch from "@mui/material/Switch";
import CustomContainer from "../CustomContainer";

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function BasicSwitches() {
  return (
    <CustomContainer>
      <div>
        <Switch {...label} defaultChecked />
        <Switch {...label} />
        <Switch {...label} disabled defaultChecked />
        <Switch {...label} disabled />
      </div>
    </CustomContainer>
  );
}
