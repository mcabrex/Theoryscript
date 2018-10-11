import React, { Component } from "react";
import Functions from "./Functions";

export default class ScriptPage extends Component {
  render() {
    return (
      <div className="script">
        <div className="script-language">Javascript</div>
        <Functions/>
      </div>
    );
  }
}
