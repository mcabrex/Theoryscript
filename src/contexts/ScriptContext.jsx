import React from "react";
import { scriptState } from './states'

export const ScriptContext = React.createContext();

export class ScriptProvider extends React.Component {
  state = scriptState;

  //***IMPORTANT***, USE FUNCTION EXPRESSION, since you're defining the context of this in the provider's value
  //handleMode(e){} ----> WILL NOT WORK
  //handleMode = (e) => {} ----> good to go!

  render() {
    return (
      //use the context to grab the provider, inside the provider render the children
      <ScriptContext.Provider
        value={{
          ...this.state,
        }}
      >
        {this.props.children}
      </ScriptContext.Provider>
    );
  }
}