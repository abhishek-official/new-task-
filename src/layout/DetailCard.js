import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import StarRatings from "react-star-ratings/build/star-ratings";
import StarRatingCard from "./StarRating";

export default function DetailCard(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          {props.name}
        </Grid>
        <Grid item xs={4}>
          {props.genre}
        </Grid>
        <Grid item xs={8}>
          <StarRatingCard rating={Number(props.rating)} />
        </Grid>
      </Grid>
    </Box>
  );
}
