import React from 'react';
import styles from './button.scss'

const Button = ({label}) => (
  <button className={styles.button}>{label}</button>
);

export default Button;
