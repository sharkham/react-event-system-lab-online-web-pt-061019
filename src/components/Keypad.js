// Code Keypad Component Here
import React, { Component } from 'react';

export class Keypad extends Component {
  handleKeyUp = () => {
    console.log('Entering password...')
  }

  render() {
    return (
      <div>
        <input onKeyUp={this.handleKeyUp} type="password" />
      </div>
    );
  }
}

export default Keypad;
