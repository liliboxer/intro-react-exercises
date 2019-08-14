import React from 'react';

export default function ColorPicker() {

  const redHandler = () => {
    console.log('red');
  };
  const yellowHandler = () => {
    console.log('yellow');
  };
  const blueHandler = () => {
    console.log('blue');
  };

  return (
    <>
      <button onClick={redHandler}>Red</button>
      <button onClick={yellowHandler}>Yellow</button>
      <button onClick={blueHandler}>Blue</button>
    </>
  );
 
}
