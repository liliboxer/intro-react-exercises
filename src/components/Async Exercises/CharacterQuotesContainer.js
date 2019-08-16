import React, { Component } from 'react';
import QuoteContainer from './QuoteContainer';

export default class CharacterQuotesContainer extends Component {
  state = {
    count: 0,
    inputCount: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState(state => ({
      count: state.inputCount,
      inputCount: ''
    }));
  }

  handleChange = ({ target }) => {
    this.setState({ inputCount: Number.parseInt(target.value) });
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input type="number" value={this.state.inputCount} onChange={this.handleChange}></input>
          <button>Fetch Quotes</button>
        </form>
        <QuoteContainer count={this.state.count}/>
      </>
    );
  }

}
