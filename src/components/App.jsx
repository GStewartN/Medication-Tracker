import React from "react";
import Header from "./Header";
import MasterMedList from "./MasterMedList";
import About from "./About";
import { Switch, Route } from 'react-router-dom';

function App(props) {

  var bodyStyle = {
    backgroundColor: "grey"
  }

  return (
    <div style={bodyStyle} className="container">
      <Header/>
      <Switch>
        <Route exact path='/' component={MasterMedList}/>
        <Route exact path='/about' component={About}/>
      </Switch>
    </div>
  );
}

export default App;
