import React, { Component } from 'react';

export default class SemitonalDistance extends Component {
  render() {
    return (
      <dl className="row">
        <dt className="col-sm-3">Function Name</dt>
        <div className="col-sm-9">
          <dd className="text-left">
            Function Description
          </dd>
          <pre className="text-left">
            <code>
              {`
                function functionName(){

                }
              `}
            </code>
          </pre>
        </div>
      </dl>
    );
  }
}
