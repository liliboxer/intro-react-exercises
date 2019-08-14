import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ColorPickerDisplay extends Component {
  static propTypes = {
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    colorHandler: PropTypes.func.isRequired
  }

  render() {
    const { colors, colorHandler } = this.props;

    const colorElement = colors.map(color => {
      return (
        <>
          <button style={{ backgroundColor: color }} onClick={() => colorHandler(color)}>
            {color}
          </button>
        </>
      );

    });

    return (
      <>
        {colorElement}
      </>
    );
  }
}
