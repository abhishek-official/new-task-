import ListItemText from "@mui/material/ListItemText";
import StarRatingCard from "../layout/StarRating";

export const movieList = [
  { title: "The Matrix", rating: "7.5", category: "Action" },
  { title: "Focus", rating: "6.9", category: "Comedy" },
  { title: "The Lazarus Effect", rating: "6.4", category: "Thriller" },
  { title: "Everly", rating: "5", category: "Action" },
  { title: "Maps to the Star", rating: "7.5", category: "Drama" },
];
export const genreList = [
  { title: "Any", display: <ListItemText>Any Genre</ListItemText> },
  { title: "Action", display: <ListItemText>Action</ListItemText> },
  { title: "Comedy", display: <ListItemText>Comedy</ListItemText> },
  { title: "Thriller", display: <ListItemText>Thriller</ListItemText> },
  { title: "Drama", display: <ListItemText>Drama</ListItemText> },
];
export const ratingList = [
  { title: "Any", display: <ListItemText>Any Ratings</ListItemText> },
  { title: 1, display: <StarRatingCard rating={1} /> },
  { title: 1.5, display: <StarRatingCard rating={1.5} /> },
  { title: 2, display: <StarRatingCard rating={2} /> },
  { title: 2.5, display: <StarRatingCard rating={2.5} /> },
  { title: 3, display: <StarRatingCard rating={3} /> },
  { title: 3.5, display: <StarRatingCard rating={3.5} /> },
  { title: 4, display: <StarRatingCard rating={4} /> },
  { title: 4.5, display: <StarRatingCard rating={4.5} /> },
  { title: 5, display: <StarRatingCard rating={5} /> },
  { title: 5.5, display: <StarRatingCard rating={5.5} /> },
  { title: 6, display: <StarRatingCard rating={6} /> },
  { title: 6.5, display: <StarRatingCard rating={6.5} /> },
  { title: 7, display: <StarRatingCard rating={7} /> },
  { title: 7.5, display: <StarRatingCard rating={7.5} /> },
  { title: 8, display: <StarRatingCard rating={8} /> },
  { title: 8.5, display: <StarRatingCard rating={8.5} /> },
  { title: 9, display: <StarRatingCard rating={9} /> },
  { title: 9.5, display: <StarRatingCard rating={9.5} /> },
  { title: 10, display: <StarRatingCard rating={10} /> },
];
