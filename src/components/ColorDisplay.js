import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ColorDisplay extends Component {
  static propTypes = {
    color: PropTypes.string.isRequired
  }

  render() {
    const { color } = this.props;

    return (
      <>
        <div style={{ backgroundColor: color, width: '100px', height: '100px' }}></div>
      </>
    );
  }
}
