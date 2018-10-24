import React from "react";

export default function functionComponent(
  props,
  functionStrings,
  functionNames,
  functionDescriptions
) {
  let div = [];
  for (const functions in functionNames) {
    div.push(
      <div className="function" {...props} key={functions}>
        <div className="function-name ">{functionNames[functions]}</div>
        <div className="function-description">
          {functionDescriptions[functions]}
        </div>
        <pre className="text-left">
          <code>{functionStrings[functions]}</code>
        </pre>
      </div>
    );
  }
  return div;
}
