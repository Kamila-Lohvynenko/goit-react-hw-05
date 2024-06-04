import css from './Error.module.css';

const Error = () => {
  return (
    <div className={css.error}>
      Ooops... Something is wrong, please, reload the page.
    </div>
  );
};

export default Error;
