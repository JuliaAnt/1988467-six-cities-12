import { Review } from '../../types/review';

type ReviewsItemProps = {
  review: Review;
}

function ReviewsItem(props: ReviewsItemProps): JSX.Element {
  const { review } = props;
  const { id, picture, userName, rating, reviewDate, comment } = review;

  return (
    <li key={id} className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={picture} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {userName}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${100 / 5 * Math.round(rating)}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={reviewDate.toString()}></time>
      </div>
    </li>
  );
}

export default ReviewsItem;