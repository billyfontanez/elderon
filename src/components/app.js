import React, { Component } from "react";
import moment from "moment";

import HomeContainer from "./main/home-container";

export default class App extends Component {
  render() {
    return (
      <div className="app">
          <h1>Elderon The Lost World/The World Begins/ The New World/The New Realm</h1>
          <div>{moment().format("MMMM Do YYYY, h:mm:ss a")}</div>
        <HomeContainer />
      </div>
    );
  }
}
