import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onToggle: true,
      warningTag: true
    };
  }

  handleClick = () => {
    this.setState({
      onToggle: !this.state.onToggle,
      warningTag: !this.state.warningTag
    });
  };

  render() {
    return (
      <div>
        <div className={this.state.warningTag ? "warning" : ""}>
          {this.state.warningTag ? "Warning!" : ""}
        </div>
        <button className="hideButton" onClick={this.handleClick}>
          {this.state.onToggle ? "Hide" : "Show"}
        </button>
      </div>
    );
  }
}

export default App;
