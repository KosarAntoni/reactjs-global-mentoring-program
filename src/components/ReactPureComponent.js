import { PureComponent } from "react";

class ReactPureComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      heading: "",
    };
  }

  handleInputChange(e) {
    this.setState((prevState) => {
      return {
        ...prevState,
        inputText: e.target.value,
      };
    });
  }

  setHeading() {
    this.setState((prevState) => {
      return {
        ...prevState,
        heading: prevState.inputText,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.heading ? this.state.heading : "No text"}</h1>
        <input type="text" onChange={(e) => this.handleInputChange(e)} />
        <button onClick={() => this.setHeading()}>Set Heading</button>
      </div>
    );
  }
}

export default ReactPureComponent;
