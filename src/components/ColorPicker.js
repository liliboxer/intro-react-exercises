import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ColorPicker.css';

export default class ColorPicker extends Component {
  static propTypes = {
    colors: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  redHandler = () => {
    console.log('red');
  };
  yellowHandler = () => {
    console.log('yellow');
  };
  blueHandler = () => {
    console.log('blue');
  };

  render() {
    return (
      <section className={styles.ColorPicker}>
        <button className={styles.red} onClick={this.redHandler}>Red</button>
        <button className={styles.yellow} onClick={this.yellowHandler}>Yellow</button>
        <button className={styles.blue} onClick={this.blueHandler}>Blue</button>
      </section>
    );
  }
 
}
