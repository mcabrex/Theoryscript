import React from "react";
import { ScriptProvider, ScriptContext } from "../../contexts/ScriptContext"
import ScriptPage from './Script'

const Script = () => {
  return (
    <div>
      <ScriptProvider>
        <ScriptContext>
          {value => <ScriptPage {...value} />}
        </ScriptContext>
      </ScriptProvider>
    </div>
  );
};

export default Script;