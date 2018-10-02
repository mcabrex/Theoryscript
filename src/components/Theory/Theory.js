import React, { Component } from "react";
import { scaleBuilder } from "../../helper/builders/theoryBuilders/";
import { TheoryKey, TheoryMode } from "./index";

export default class TheoryPage extends Component {
  render() {
    let props = this.props;
    console.log(scaleBuilder)
    return (
      <div>
        <br />
        <TheoryMode />
        <TheoryKey />
        <br />
        <div className="scales d-flex align-content-stretch flex-wrap">
          {scaleBuilder(props.scale)}
        </div>
        <div>Triads</div>
      </div>
    );
  }
}
