import React, { Component } from 'react';
const figlet = require('figlet');

export default class TextFormatter extends Component {
  state = {
    text: '',
    formattedText: '',
    font: 'Banner',
    color: ''
  }

  parseText= () => {
    figlet.text(this.state.text, {
      font: this.state.font
    }, (err, data) => {
      this.setState({ formattedText: data });
    });
  }

  handleColorChange = ({ target }) => {
    this.setState({ color: target.value });
  }
  
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value }, () => {
      this.parseText();
    });
  }
  
  render() {
    const { text, formattedText, color, font } = this.state;
    console.log(formattedText);
    const fontArr = ['Ghost', 'Arrows', 'Banner', 'Acrobatic'];
    const mappedFonts = fontArr.map(font => {
      return <option key={font} value={font}>{font}</option>;
    });

    return (
      <>
        <form>
          <input type="color" name="color" value={color} onChange={this.handleColorChange}></input>
          <input placeholder="Type Here" name="text" value={text} onChange={this.handleChange}></input>
          <select name="font" defaultValue={font} onChange={this.handleChange}>{mappedFonts}</select>
        </form>
        <pre style={{ color: color } }>{formattedText}</pre>
      </>
    );
  }
}
