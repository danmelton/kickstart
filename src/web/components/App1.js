import React from "react";
import NavBar from "./NavBar";

class App1 extends React.Component {
  render() {
    return (
      <div className="app1-page">
        <NavBar />
        <h1 className="app1-page-title tc-app1-page-title">Hello {this.props.name}</h1>
      </div>
    );
  }
}

export default App1;
