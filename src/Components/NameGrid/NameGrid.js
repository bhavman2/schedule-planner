import React, { Component } from 'react';
import './NameGrid.css'

class NameGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    }
  }

  edit = (e) => {
    var text = e.target.value;
    this.setState({
      text: text
    })
  }

  render() {
    return (
      <input type="text" className="name-grid-item" name={this.state.text} onKeyUp={this.edit} size="4" />
    );
  }
}

export default NameGrid;