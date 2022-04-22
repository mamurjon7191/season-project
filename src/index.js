import React from "react";
import ReactDOM from "react-dom";
import { DisplaySeason } from "./DisplaySeason.js";
// import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      err: "",
    };
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ err: err.message });
      }
    );
  }
  render() {
    return (
      <div>
        {/* <div>Latitude:{this.state.lat}</div>
        <div>Error:{this.state.err}</div> */}
        <DisplaySeason lat={this.state.lat} err={this.state.err} />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
