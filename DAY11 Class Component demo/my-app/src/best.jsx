import React from "react";
import { Component } from "react";

class Best extends Component {
  state = { count: 0 };

  handleClick = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          Count is {this.state.count} from best
        </button>
      </div>
    );
  }
}
export default Best;

