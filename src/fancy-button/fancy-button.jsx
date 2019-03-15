import React from 'react';
import styles from './fancy-button.scss'

const FancyButton = ({label}) => (
    <button className={styles.button}>{label}</button>
);

export default FancyButton;
