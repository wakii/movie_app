import React from "react";

class App extends React.Component {
  state = {
    isLoading: true
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 5000);
  }

  render() {
    const { isLoading } = this.state;

    return <div> {isLoading ? "Loading" : "ready"}</div>;
  }
}

export default App;
