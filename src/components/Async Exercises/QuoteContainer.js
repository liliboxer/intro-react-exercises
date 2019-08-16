import React, { Component } from 'react';
import { getQuotes } from './simpsonsApi';
import Quotes from './Quotes';
import PropTypes from 'prop-types';

export default class QuoteContainer extends Component {
  static propTypes = {
    count: PropTypes.number.isRequired
  }

  state = {
    quotes: []
  }

  fetchQuotes = () => {
    return getQuotes(this.props.count)
      .then(quotes => {
        this.setState({ quotes });
      });
  }

  componentDidMount() {
    this.fetchQuotes();
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.count !== this.props.count) {
      this.fetchQuotes();
    }
  }

  render() {
    return (
      <Quotes quotes={this.state.quotes}/>
    );
  }
}
