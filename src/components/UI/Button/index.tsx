import React from 'react';

import styles from './styles.module.css';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({children, onClick}) => {
  return (
    <button className={styles.button} onClick={onClick}>{children ?? 'Button'}</button>
  );
};

export default Button;