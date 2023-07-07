import { RotatingLines } from 'react-loader-spinner';
import css from './Spinner.module.css';

export const Spinner = () => {
  return (
    <div className={css.backdrop}>
      <div className={css.spinner}>
        <RotatingLines strokeWidth='4' strokeColor='grey' />
      </div>
    </div>
  );
};
