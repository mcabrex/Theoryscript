import React from 'react'
import { ScriptContext } from '../../../contexts/ScriptContext'

function Gaggablog(props) {
    //props won't be getting passed directly through the div but through the function, so accept the props that are going to get passed
    return (
      <ScriptContext.Consumer>
        {({ functionStrings }) => {
          console.log(functionStrings)
         return (
          <div className="" {...props}>
            functionStrings = 
          </div>
        )
        }}
      </ScriptContext.Consumer>
    );
  }

export default Gaggablog