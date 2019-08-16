import React, { Component } from 'react';
import { getQuotes } from './simpsonsApi';
import Quotes from './Quotes';

export default class QuoteContainer extends Component {
  state = {
    quotes: []
  }

  componentDidMount() {
    return getQuotes()
      .then(quotes => {
        this.setState({ quotes });
      });
  }

  render() {
    return (
      <Quotes quotes={this.state.quotes}/>
    );
  }
}
