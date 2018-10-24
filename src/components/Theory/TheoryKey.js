import React from "react";
import { keyDropDown } from "../builders";
import { TheoryContext } from "../../contexts/TheoryContext";

function TheoryKey(props) {
  //props won't be getting passed directly through the div but through the function, so accept the props that are going to get passed
  return (
    <TheoryContext.Consumer>
      {({ key, keys, handleKey, handleAccidental }) => {
        let accidentalClassFlat =
          key[1] === "♭" ? "key-accidental-button-pressed" : "key-accidental-button";
        let accidentalClassSharp =
          key[1] === "♯" ? "key-accidental-button-pressed" : "key-accidental-button";
        return (
          <div {...props} className="key">
            <div className="key-buttons" aria-label="Basic example">
              {keyDropDown(keys, key, handleKey)}
            </div>
            <div onClick={handleAccidental} className="key-accidental-buttons" aria-label="Basic example">
              <button id="♭" type="button" className={accidentalClassFlat}>
                {"♭"}
              </button>
              <button id="♯" type="button" className={accidentalClassSharp}>
                {"♯"}
              </button>
            </div>
          </div>
        );
      }}
    </TheoryContext.Consumer>
  );
}

export default TheoryKey;
//exporting a function which will return the consumer object
