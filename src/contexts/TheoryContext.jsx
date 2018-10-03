import React from "react";
import { theoryState } from './states'
import { scaleMaker, scaleChords } from "../helper/functions";

export const TheoryContext = React.createContext();

export class TheoryProvider extends React.Component {
  state = theoryState

  //***IMPORTANT***, USE FUNCTION EXPRESSION, since you're defining the context of this in the provider's value
  //handleMode(e){} ----> WILL NOT WORK
  //handleMode = (e) => {} ----> good to go!
  handleMode = e => {
    let mode = e.target.value;
    let key = this.state.key;
    let scale = scaleMaker(mode, key);
    let triads = scaleChords(scale);

    this.setState({
      mode,
      scale,
      triads
    });
  };

  handleKey = e => {
    let oldKey = this.state.key[0];
    let target = e.target.id;
    let newKey =
      target === "♭" || target === "♯" || target === ""
        ? (oldKey += target)
        : target;
    let mode = this.state.mode;
    let scale = scaleMaker(mode, newKey);
    let triads = scaleChords(scale);
    this.setState({
      key: newKey,
      scale,
      triads,
    });
    //when key is changed, state.scale is changed
  };

  handleAccidental = e => {
    //fix accidental key
    let target = e.target.id;
    let key = this.state.key;
    let note = key[0];
    let mode = this.state.mode;
    if (key[1] === target) key = note;
    else key = note += target;
    let scale = scaleMaker(mode, key);
    let triads = scaleChords(scale);

    this.setState({
      key,
      scale,
      triads
    });
  };

  render() {
    return (
      //use the context to grab the provider, inside the provider render the children
      <TheoryContext.Provider
        value={{
          ...this.state,
          handleKey: this.handleKey,
          handleAccidental: this.handleAccidental,
          handleMode: this.handleMode
        }}
      >
        {this.props.children}
      </TheoryContext.Provider>
    );
  }
}