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
      <dl className="" {...props} key={functions} >
        <dt className="col-sm-3 function-name">{functionNames[functions]}</dt>
        <div className="col-sm-9">
          <dd className="text-left function-description">{functionDescriptions[functions]}</dd>
          <pre className="text-left function-string">
            <code>{functionStrings[functions]}</code>
          </pre>
        </div>
      </dl>
    );
  }
  return div;
}

