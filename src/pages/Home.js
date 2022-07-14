import React, { useState, useEffect } from "react";
import MultiSelector from "../components/MultiSelector";
import SearchAuto from "../components/SearchAuto";
import Box from "@mui/material/Box";
import { genreList, ratingList, movieList } from "../constants/static";
export default function Home() {
  const [movieData, updateMovieData] = useState(movieList);
  const [filterRating, setFilterRating] = useState([]);
  const [filterGenre, setFilterGenre] = useState([]);
  useEffect(() => {
    let temp = movieList;
    if (filterRating.length && !filterRating.includes("Any")) {
      temp = temp.filter((data) => filterRating.includes(Number(data.rating)));
    }
    if (filterGenre.length && !filterGenre.includes("Any")) {
      temp = temp.filter((data) => filterGenre.includes(data.category));
    }
    updateMovieData(temp);
  }, [filterRating, filterGenre]);

  return (
    <React.Fragment>
      <Box
        sx={{
          width: "95%",
          height: 100,
          background: "#D0D0D0",
          margin: "auto",
          marginTop: 10,
          paddingTop: 3,
          paddingBottom: 3,
        }}
      >
        <div
          style={{
            display: "flex",
            width: "95%",
            background: "#FFFFFF",
            margin: "auto",
            padding: "10px",
          }}
        >
          <SearchAuto title={"Enter movie name"} data={movieData} />
          <MultiSelector
            title={"Rating"}
            data={ratingList}
            width={300}
            updateFilterData={(filterData) => setFilterRating(filterData)}
          />
          <MultiSelector
            title={"Genre"}
            data={genreList}
            updateFilterData={(filterData) => setFilterGenre(filterData)}
          />
        </div>
      </Box>
    </React.Fragment>
  );
}
