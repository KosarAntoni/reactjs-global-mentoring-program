import { Component } from "react";

class ReactComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  decreaseCounter() {
    this.setState((prevState) => {
      return {
        counter: prevState.counter - 1,
      };
    });
  }
  increaseCounter() {
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
      };
    });
  }

  render() {
    return (
      <div>
        <span>Counter {this.state.counter}</span>
        <button onClick={() => this.decreaseCounter()}>-</button>
        <button onClick={() => this.increaseCounter()}>+</button>
      </div>
    );
  }
}

export default ReactComponent;
