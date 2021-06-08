import ReactStars from 'react-rating-stars-component';
import { theme } from '../../styles/theme';

type RatingStarsCdProps = {
  rating: number;
};

export const RatingStarsBook: React.FC<RatingStarsCdProps> = (props: RatingStarsCdProps) => {
  const { rating } = props;

  return (
    <ReactStars
      size={20}
      activeColor={`${theme.colors.primaryYellow[500]}`}
      color={`${theme.colors.primaryBlack[900]}`}
      value={rating}
      edit={false}
      isHalf={true}
    />
  );
};

export default RatingStarsBook;
