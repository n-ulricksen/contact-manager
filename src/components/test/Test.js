import React, { Component } from "react";

class Test extends Component {
  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return null;
  }

  render() {
    return (
      <div>
        <h1>Test Component</h1>
      </div>
    );
  }
}

export default Test;
