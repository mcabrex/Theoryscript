import React from "react";
import Routes from "./Routes"
import { Navbar } from "./components";

const App = () => {
  return (
    <div className="site">
      <Navbar />
      <Routes />
    </div>
  );
};

export default App;