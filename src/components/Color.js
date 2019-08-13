import React from 'react';

export default function Color() {
  const color = {
    name: 'Black',
    hex: 	'#000000',
    rgb:  '0, 0, 0'
  };

  // ems for font
  // rems for padding, margin, width, height 
  const styles = {
    backgroundColor: color.hex,
    width: '0.4rem',
    height: '0.4rem',
    display: 'inline-block'
  };

  const fields = Object.keys(color)
    .map(key => {
      return (
        <>
          <dt>{key}<div style={styles}></div></dt>
          <dd>{color[key]}</dd>
        </>
      );
    });



  return (
    <dl>
      {fields}
    </dl>
  );

}
