import css from './ReviewList.module.css';

const ReviewList = ({ reviews }) => {
  return (
    <ul className={css.list}>
      {reviews.map(review => {
        return (
          <li key={review.id} className={css.item}>
            <h4 className={css.name}>Author: {review.author}</h4>
            <p className={css.text}>{review.content}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default ReviewList;
