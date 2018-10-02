import React from 'react'
import { ScriptContext } from '../../contexts/ScriptContext'
import { functionComponent } from '../../helper/builders'

function Functions(props) {
  //props won't be getting passed directly through the div but through the function, so accept the props that are going to get passed
  return (
    <ScriptContext.Consumer>
      {({ functionStrings, functionNames, functionDescriptions }) => {
       return (
         <div>
           {functionComponent(props,functionStrings,functionNames,functionDescriptions)}
         </div>
      )
      }}
    </ScriptContext.Consumer>
  );
}

export default Functions