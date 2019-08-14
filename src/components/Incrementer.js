import React, { Component } from 'react';

export default class Incrementer extends Component {
  state = {
    count: 0
  }

  countHandler = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <>
        <button onClick={() => this.countHandler(this.count)}>Count</button>
        {this.state.count}
      </>
    );
  }
}
