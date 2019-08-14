import React from 'react';
import Dog from './Dog';
import Header from './Header';
import Color from './Color';
import ColorPicker from './ColorPicker';

export default function App() {
  return (
    <>
      <Header/>
      <Dog name="Max" age={5} weight="10lbs"/>
      <Color color="Blue" hex="#00FF77" rgb={{ r:3, g:5, b:3 }}/>
      <ColorPicker/>
    </>
  );
}
  
