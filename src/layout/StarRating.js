import StarRatings from "react-star-ratings/build/star-ratings";
export default function StarRatingCard(props) {
  return (
    <StarRatings
      rating={Number(props.rating)}
      starRatedColor="gold"
      numberOfStars={10}
      name="rating"
      starDimension="20px"
      starSpacing="1px"
    />
  );
}
