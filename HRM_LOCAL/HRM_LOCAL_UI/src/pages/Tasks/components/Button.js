import React from 'react';
import styles from '../styles/modules/button.module.scss';
import { getClasses } from '../../../utils/getClasses';
import { textAlign } from '@mui/system';

const buttonTypes = {
  primary: 'primary',
  secondary: 'secondary',
};

function Button({ type, variant = 'primary', children, ...rest }) {
  return (
    <button
      type={type === 'submit' ? 'submit' : 'button' }
      className={getClasses([
        styles.buttonn,
         styles[`button--${buttonTypes[variant]}`],
      ])}
      {...rest}
    >
      {children}
    </button>
  );
}

function SelectButton({ children, id, ...rest }) {
  return (
    <select
      id={id}
      className={getClasses([styles.buttonn, styles.button__selectt])}
      {...rest}
    >
      {children}
    </select>
  );
}

export { SelectButton };
export default Button;