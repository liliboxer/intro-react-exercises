import React from 'react';
import Dog from './Dog';
import Header from './Header';
import Color from './Color';

export default function App() {
  return (
    <>
      <Header/>
      <Dog name="Max" age={5} weight="10lbs"/>
      {/* <Color /> */}
    </>
  )
}
  