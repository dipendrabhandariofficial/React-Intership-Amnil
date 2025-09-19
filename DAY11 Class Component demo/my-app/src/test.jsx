import React, { Component } from 'react';
import World from './World.jsx';

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = { count:0};
    this.handleClick = this.handleClick.bind(this);
  } 
    handleClick() {
    this.setState((prevState)=>({count:prevState.count + 1}));
  }             
    render() {

    return (
      <div>
        <World /> <br />
        <button className="btn" onClick={this.handleClick}>
          Count is {this.state.count} from test
        </button>
        </div>
    );
  }
}

export default Test;