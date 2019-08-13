import React from 'react';
import PropTypes from 'prop-types';

function Color({ name, hex, rgb: { r, g, b } }) {

  return (
    <dl>
      <dt>Name</dt>
      <dd>{name}</dd>

      <dt>Hex</dt>
      <dd>{hex}</dd>

      <dt>RGB</dt>
      <dd>R: {r}</dd>
      <dd>G: {g}</dd>
      <dd>B: {b}</dd>
    </dl>
  );
}

Color.propTypes = {
  name: PropTypes.string.isRequired,
  hex: PropTypes.number.isRequired,
  rgb: PropTypes.object.isRequired
};

export default Color;
