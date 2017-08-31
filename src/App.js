import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Layer, Rect, Stage, Group } from 'react-konva';

class MyRect extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      color: 'green' 
    };

  }

  handleClick = () => {
    this.setState({
      color: window.Konva.Util.getRandomColor()
    });
  }

  render() {
    return (
      <Rect x={10} y={10} width={50} height={50} fill={this.state.color} onClick={this.handleClick} draggable="true" />
    );
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Stage width={900} height={900}>
          <Layer>
            <MyRect />
          </Layer> 
        </Stage>
        <div>
          Let's draw in Canvas!
          </div>
      </div>
    );
  }
}


export default App;
