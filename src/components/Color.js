import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Color extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    hex: PropTypes.number.isRequired,
    rgb: PropTypes.shape({
      r: PropTypes.number.isRequired,
      g: PropTypes.number.isRequired,
      b: PropTypes.number.isRequired
    }).isRequired
  }

  render() {
    const { name, hex, rgb } = this.props;

    return (
      <>
        <dt>Name</dt>
        <dd>{name}</dd>
    
        <dt>Hex</dt>
        <dd>{hex}</dd>
    
        <dt>RGB</dt>
        <dd>R: {rgb.r}</dd>
        <dd>G: {rgb.g}</dd>
        <dd>B: {rgb.b}</dd>
      </>
    );
  }
}
