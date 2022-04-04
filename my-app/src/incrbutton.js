import React, { Component } from 'react'
import { BUTTON_TYPE } from '../constant';

export default class incributton extends Component {

  const incrButtonClick = () => {
    this.props.onclick(BUTTON_TYPE.INCREMENT);

  }

  render() {
      const {onclick} = this.props;
      
    return (
      <button onclick={this.incrButtonClick} >+</button>
    )
  }
}
