import React, { Component } from 'react';
import Quotes from './Async Exercises/Quotes';
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
        <Quotes quotes={[
          {
            'quote': 'Ha ha!',
            'character': 'Nelson Muntz',
            'image': 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185',
          },
          {
            'quote': 'Last night\'s \'Itchy and Scratchy\' was, without a doubt, the worst episode ever. Rest assured that I was on the Internet within minutes, registering my disgust throughout the world.',
            'character': 'Comic Book Guy',
            'image': 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FComicBookGuy.png?1497567511970',
          },
          {
            'quote': 'Ahh! Sweet liquor eases the pain.',
            'character': 'Troy McClure',
            'image': 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FTroyMcClure.png?1497567511112',
          },
          {
            'quote': 'In theory, Communism works! In theory.',
            'character': 'Homer Simpson',
            'image': 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939',
          },
          {
            'quote': 'Gah, stupid sexy Flanders!',
            'character': 'Homer Simpson',
            'image': 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939',
          },
          {
            'quote': 'Shut up, brain. I got friends now. I don\'t need you anymore.',
            'character': 'Lisa Simpson',
            'image': 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083',
          },
          {
            'quote': 'I\'m sleeping in the bath tub.',
            'character': 'Marge Simpson',
            'image': 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMargeSimpson.png?1497567512205',
          },
          {
            'quote': 'Marriage is like a coffin and each kid is another nail.',
            'character': 'Homer Simpson',
            'image': 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939',
          },
          {
            'quote': 'These are my only friends...grown-up nerds like Gore Vidal. And even he\'s kissed more boys than I ever will.',
            'character': 'Lisa Simpson',
            'image': 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083',
          },
          {
            'quote': 'Why are you pleople avoiding me? Does my withered face remind you of the grim specter of death?',
            'character': 'Abe Simpson',
            'image': 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FAbrahamSimpson.png?1497567511593',
          }
        ]}/>
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
  
