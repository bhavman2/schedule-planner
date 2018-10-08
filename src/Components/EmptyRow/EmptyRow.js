import React, { Component } from 'react';
import './EmptyRow.css'


// Orange - speech
// blue - ot
// yelow - pt

class EmptyRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  consoleLog = (r, c) => {
    console.log(r, c);
  }

  createEmptyGrids = (props) => {
    var row = [];
    for (var i = 0; i < 21; i++) {
      row.push(<div className="empty-grid-item" onClick={this.consoleLog.bind(this, this.props.row, i)}>
        <div className="modal">
          hi
        </div>
      </div>)
    }
    return row;
  }


  render(props) {
    return (
      <>
        {this.createEmptyGrids(props)}
      </>
    );
  }
}

export default EmptyRow;