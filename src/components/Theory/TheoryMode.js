import React from "react";
import { modeDropDown } from "../../helper/builders";
import { TheoryContext } from "../../contexts/TheoryContext";

function TheoryMode(props) {
  //props won't be getting passed directly through the div but through the function, so accept the props that are going to get passed
  return (
    <TheoryContext.Consumer>
      {({ handleMode, modes, mode }) => (
        <div className="mode">
          mode:
          <select {...props} value={mode} onChange={handleMode} className="">{modeDropDown(modes)}</select>
        </div>
      )}
    </TheoryContext.Consumer>
  );
}

export default TheoryMode;
//exporting a function which will return the consumer object
