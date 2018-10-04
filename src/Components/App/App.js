import React, { Component } from 'react';
import './App.css';
import NameGrid from '../NameGrid/NameGrid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      therapist: '',
      therapists: []
    }
    this.rooms = ['568A', '568B', '569A', '569B', '570A', '570B', '571A', '571B', '572A', '572B', '573A', '573B', '574A', '574B', '575', '576A', '576B', '577A', '577B'];
    this.times = ['07:00', '07:30', '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '01:00', '01:30', '02:00', '02:30', '03:00', '03:30', '04:00', '04:30', '05:00']
    this.tempTherapists = [];
  }

  consoleLog = (row, col) => {
    console.log(row, col);
  }

  handleNewTherapistType = (e) => {
    var name = e.target.value.trim();
    this.setState({
      therapist: name
    });
  }

  handleNewTherapistSubmit = () => {
    if (this.state.therapist !== "") {
      this.tempTherapists.push(this.state.therapist);

      this.setState({
        therapists: this.tempTherapists
      });
    }
  }

  createRows = () => {
    var row = [];
    for (var i = 0; i < this.rooms.length; i++) {
      row.push(<div key={i} className="app-grid-item">{this.rooms[i]}</div>);
      row.push(<NameGrid />);
      row.push(this.createEmptyGrid(i));
    }
    return row;
  }

  createEmptyGrid = (row) => {
    var table = [];
    for (var i = 0; i < 21; i++) {
      table.push(<div row={row} key={i} className="app-grid-item" onClick={this.consoleLog.bind(this, row, i)}></div>);
    }
    return table;
  }

  render() {
    return (
      <div className="app">

        <div className="app-grid">
          <div className="app-grid-container">
            <div className="app-grid-item">Room</div>
            <div className="app-grid-item">Name</div>
            {this.times.map(time => {
              return <div className="app-grid-item">{time}</div>
            })}
            {this.createRows()}
          </div>
        </div>

        <div className="app-thearpists">
          <ul>
            {this.state.therapists.map(x => {
              return <li>{x}</li>
            })}
          </ul>

          <input type="text" className="" name="Enter therapist name here" onKeyUp={this.handleNewTherapistType} size="4" />
          <button onClick={this.handleNewTherapistSubmit}>Add Therapist</button>

        </div>

      </div>
    );
  }
}

export default App;
