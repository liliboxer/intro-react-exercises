import React from 'react';
import PropTypes from 'prop-types';

function ColorItem({ name, hex, rgb }) {
  return (
    <>
      <p>{name}</p>
      <p>{hex}</p>
      <dt>RGB</dt>
        <dd>R: {rgb.r}</dd>
        <dd>G: {rgb.g}</dd>
        <dd>B: {rgb.b}</dd>
    </>
  );
}

ColorItem.propTypes = {
  name: PropTypes.string.isRequired,
  hex: PropTypes.string.isRequired,
  rgb: PropTypes.shape({
    r: PropTypes.number.isRequired,
    g: PropTypes.number.isRequired,
    b: PropTypes.number.isRequired
  }).isRequired
};

export default ColorItem;
