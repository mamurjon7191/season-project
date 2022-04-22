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
    if (this.state.err) {
      return <div className="error">Iltimos Internetingizni tekshiring</div>;
    } else if (this.state.lat) {
      return (
        <div>
          <DisplaySeason lat={this.state.lat} err={this.state.err} />
        </div>
      );
    }
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
