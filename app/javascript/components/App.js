import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter } from "react-router-dom";
import Greeting from "./Greeting"
class App extends React.Component {
  render () {
    return (  
      <BrowserRouter>
        <Greeting greeting="Hello"/>
      </BrowserRouter>
    );
  }
}

export default App;
