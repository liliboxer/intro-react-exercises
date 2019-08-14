import React, { Component } from 'react';
import ColorPickerDisplay from './ColorPickerDisplay';
import ColorDisplay from './ColorDisplay';

export default class App extends Component {
  state = {
    color: ''
  }

  colorHandler = color => {
    this.setState({ color });
    console.log(color);
  }

  render() {
    return (
      <>
        <ColorPickerDisplay colors={['green', 'beige', 'yellow']} colorHandler={this.colorHandler}/>
        <ColorDisplay color={this.state.color}/>
      </>
    );
  }
}
  
