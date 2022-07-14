import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function MultiSelector(props) {
  const [selectedData, setSelectedData] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedData((prevData) =>
      typeof value === "string" ? value.split(",") : value
    );
    props.updateFilterData(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: props.width ? props.width : 200 }}>
        <InputLabel id="demo-multiple-checkbox-label">{props.title}</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={selectedData}
          onChange={handleChange}
          input={<OutlinedInput label={props.title} />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {props.data.map((item) => (
            <MenuItem key={item.title} value={item.title}>
              <Checkbox checked={selectedData.indexOf(item.title) > -1} />
              {item.display}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
