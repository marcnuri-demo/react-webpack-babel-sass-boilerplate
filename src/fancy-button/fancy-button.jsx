import React, {Component} from 'react';
import styles from './fancy-button.scss'

class FancyButton extends Component {
  render() {
    return (
        <button className={styles.button}>{this.props.label}</button>
    );
  }
}

export default FancyButton;
