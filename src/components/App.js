import React, { Component } from 'react';
import ColorList from './ColorList';
// import ColorPickerDisplay from './ColorPickerDisplay';
// import ColorDisplay from './ColorDisplay';
// import RandomColor from './RandomColor';

export default class App extends Component {
  // state = {
  //   color: ''
  // }

  // colorHandler = color => {
  //   this.setState({ color });
  //   console.log(color);
  // }

  render() {
    return (
      <>
        {/* <ColorPickerDisplay colors={['green', 'beige', 'yellow']} colorHandler={this.colorHandler}/>
        <ColorDisplay color={this.state.color}/> */}
        {/* <RandomColor /> */}
        <ColorList colors={[
          { name: 'red', hex: '#FF0011', rgb: { r: 1, g: 5, b: 2 } },
          { name: 'orange', hex: '#FF3211', rgb: { r: 1, g: 4, b: 10 } },
          { name: 'yellow', hex: '#FF089', rgb: { r: 4, g: 4, b: 2 } },
          { name: 'green', hex: '#FF0011', rgb: { r: 1, g: 72, b: 2 } },
        ]}/>
      </>
    );
  }
}
  
