import React, { Component } from "react";

import HomeItem from "./home-item";

export default class HomeContainer extends Component {
  constructor() {
    super();

    console.log("Home container has rendered");
  }

  homeItems(){
    const data = ['About', 'Characters', 'Weapons']

    return data.map(item=>{
      return <HomeItem title={item}/>;
      

    })
  }

  render() {
    return (
      <div>
        <h2>Home items go here updated...</h2>

        {this.homeItems()}
      </div>
    );
  }
}