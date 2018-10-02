import React from "react";
import TheoryKey from './TheoryKey'
import TheoryMode from './TheoryMode'
import TheoryPage from './Theory'
import { TheoryProvider, TheoryContext } from "../../contexts/TheoryContext";


export {
    TheoryKey,
    TheoryMode
}

const Theory = () => {
    return (
        <div>
      <TheoryProvider>
        <TheoryContext.Consumer>
          {value => <TheoryPage {...value} />}
        </TheoryContext.Consumer>
      </TheoryProvider>
    </div>
  );
};

export default Theory



