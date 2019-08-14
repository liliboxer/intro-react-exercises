import React, { Component } from 'react';
import styles from './ColorPicker.css';
import PropTypes from 'prop-types';

export default class ColorPicker extends Component {
  static propTypes = {
    colors: PropTypes.arrayOf(PropTypes.string).isRequied
  }

  state = {
    color: ''
  };

  colorHandler = color => {
    this.setState({ color });
  }

  render() {
    const { colors } = this.props;

    const colorElements = colors.map(color => {
      return (
        <button key={color} style={{ backgroundColor: color }} onClick={() => this.colorHandler(color)}>
          {color}
        </button>
      );
    });

    return (
      <section className={styles.ColorPicker}>
        <div style={{ backgroundColor: this.state.color }}></div>
        {colorElements}
      </section>
    );
  }
}
 
