import React from 'react';
import PropTypes from 'prop-types';
import ColorItem from './ColorItem';

function ColorList({ colors }) {
  const colorList = colors.map(color => {
    console.log(color);
    return (
      <li key={color.name}>
        <ColorItem name={color.name} hex={color.hex} rgb={color.rgb}/>
      </li>
    );
  });

  return (
    <ul>
      {colorList}
    </ul>
  );
}

ColorList.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    hex: PropTypes.string.isRequired,
    rgb: PropTypes.shape({
      r: PropTypes.number.isRequired,
      g: PropTypes.number.isRequired,
      b: PropTypes.number.isRequired
    }).isRequired
  })).isRequired
};

export default ColorList;
