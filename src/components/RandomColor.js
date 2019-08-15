import React, { Component } from 'react';

export default class RandomColor extends Component {
  state = {
    background: ''
  }

  componentDidMount() {
    const colors = ['red', 'orange', 'yellow', 'blue', 'purple'];
    setInterval(() => { 
      const random = Math.floor(Math.random() * colors.length);
      if(this.state.background !== colors[random]) {
        this.setState({ background: colors[random] }); 
      } else {
        this.setState({ background: 'url("https://i.dailymail.co.uk/i/pix/2016/03/18/15/324D202500000578-3498922-image-a-33_1458315465874.jpg")' });
      }
    }, 700);

  }

  render() {
    return (
      <>
        <div style={{ background: this.state.background, width: '1000px', height: '1000px' }}></div>
      </>
    );

    // if(this.state.backgroundColor) {
    // } else {
    //   return(
    //     <>
    //       <img src="colors[random]"></img>
    //     </>;
    //   )
    // }
  }
}

