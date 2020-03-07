import React, { Component } from 'react';

class App extends Component{
  render() {
    // const greeting = "Hi"
    // const dom = <h1 className = "foo">{greeting}</h1>;
    return (
    < React.Fragment >
      <label htmlFor="bar">bar</label>
      <input type="text" onChange={() => { console.log("yes") }} />;
    </ React.Fragment>
    )
  }
}

export default App;
