import React, { Component } from 'react';
import QuoteContainer from './Async Exercises/QuoteContainer';
// import Quote from './Async Exercises/Quote';
// import Photos from './Photos';
// import ColorList from './ColorList';
// import ColorPickerDisplay from './ColorPickerDisplay';
// import ColorDisplay from './ColorDisplay';
// import RandomColor from './RandomColor';
// import PhotoAlbum from './PhotoAlbum';
// import Header from './Header';
// import Footer from './Footer';
// import TextFormatter from './TextFormatter';

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
        <QuoteContainer />
        {/* <TextFormatter /> */}
        {/* <Header/>
        <PhotoAlbum title={'Lili\'s Photos'} photos={[
          'https://i.dailymail.co.uk/i/pix/2016/03/18/15/324D202500000578-3498922-image-a-33_1458315465874.jpg',
          'http://i.imgur.com/GQcvWqx.jpg'
        ]}/>
        <Footer/> */}
        {/* <ColorPickerDisplay colors={['green', 'beige', 'yellow']} colorHandler={this.colorHandler}/>
        <ColorDisplay color={this.state.color}/> */}
        {/* <RandomColor /> */}
        {/* <ColorList colors={[
          { name: 'red', hex: '#FF0011', rgb: { r: 1, g: 5, b: 2 } },
          { name: 'orange', hex: '#FF3211', rgb: { r: 1, g: 4, b: 10 } },
          { name: 'yellow', hex: '#FF089', rgb: { r: 4, g: 4, b: 2 } },
          { name: 'green', hex: '#FF0011', rgb: { r: 1, g: 72, b: 2 } },
        ]}/> */}
       {/* <Photos photos={[
         'https://i.dailymail.co.uk/i/pix/2016/03/18/15/324D202500000578-3498922-image-a-33_1458315465874.jpg',
         'http://i.imgur.com/GQcvWqx.jpg'
       ]}/> */}
      </>
    );
  }
}
  
