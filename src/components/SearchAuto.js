import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import DetailCard from "../layout/DetailCard";

export default function SearchAuto(props) {
  return (
    <Autocomplete
      id="component-search-auto"
      sx={{ width: "50%", marginTop: 1 }}
      options={props.data}
      autoHighlight
      getOptionLabel={(option) => option.title}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          <DetailCard
            name={option.title}
            genre={option.category}
            rating={option.rating}
          />
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label={props.title}
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password", // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}
