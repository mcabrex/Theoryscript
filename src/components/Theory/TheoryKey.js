import React from "react";
import { keyDropDown } from "../../helper/builders";
import { TheoryContext } from "../../contexts/TheoryContext";

function TheoryKey(props) {
  //props won't be getting passed directly through the div but through the function, so accept the props that are going to get passed
  return (
    <TheoryContext.Consumer>
      {({ key, keys, handleKey, handleAccidental }) => (
        <div {...props} className="key">
          <div
            onClick={handleKey}
            className="btn-group"
            role="group"
            aria-label="Basic example"
          >
            {keyDropDown(keys)}
          </div>
          <div
            onClick={handleAccidental}
            className="btn-group"
            role="group"
            aria-label="Basic example"
          >
            <button id="b" type="button" className="btn btn-secondary">
              {"b"}
            </button>
            <button id="#" type="button" className="btn btn-secondary">
              {"#"}
            </button>
          </div>
          <br />
          <div>Key: {key}</div>
        </div>
      )}
    </TheoryContext.Consumer>
  );
}

export default TheoryKey;
//exporting a function which will return the consumer object
