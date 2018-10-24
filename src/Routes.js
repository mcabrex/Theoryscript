import React from "react";
import { Route } from "react-router-dom";
import { Script, Theory } from "./components";

const Routes = () => {
  return (
    <div className="content">
      <Route exact path="/" component={Theory} />
      <Route path="/script" component={Script} />
    </div>
  );
};

export default Routes;