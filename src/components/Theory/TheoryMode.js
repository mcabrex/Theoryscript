import React from "react";
import { modeDropDown } from "../builders";
import { TheoryContext } from "../../contexts/TheoryContext";

function TheoryMode(props) {
  //props won't be getting passed directly through the div but through the function, so accept the props that are going to get passed
  return (
    <TheoryContext.Consumer>
      {({ handleMode, modes, mode }) => (
        <div className="mode">
          MODE: 
          <select {...props} value={mode} onChange={handleMode} className="mode-select">{modeDropDown(modes)}</select>
        </div>
      )}
    </TheoryContext.Consumer>
  );
}

export default TheoryMode;
//exporting a function which will return the consumer object
