import React, { Component } from 'react';
const figlet = require('figlet');

export default class TextFormatter extends Component {
  state = {
    text: '',
    formattedText: '',
    font: 'Ghost',
    color: ''
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  handleTextChange = ({ target }) => {
    let formattedText = '';
    figlet.text(target.value, {
      font: this.state.font
    }, function(err, data) {
      formattedText = data;
    });
    this.setState({ [target.name]: target.value, formattedText });
    console.log(formattedText);
  }

  handleColorChange = ({ target }) => {
    this.setState({ color: target.value });
  }

  render() {
    const { text, formattedText, color,  handleColorChange } = this.state;

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input type="color" name="color" value={color} onChange={this.handleColorChange}></input>
          <input placeholder="Type Here" name="text" value={text} onChange={this.handleTextChange}></input>
        </form>
        <pre style={{ color: color } }>{formattedText}</pre>
      </>
    );
  }
}
