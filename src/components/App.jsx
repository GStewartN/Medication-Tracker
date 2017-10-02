import React from "react";
import Header from "./Header";
import MasterMedList from "./MasterMedList";
import About from "./About";
import { Switch, Route } from 'react-router-dom';

function App(props) {
  return (
    <div className="container">
      <Header/>
      <Switch>
        <Route exact path='/' component={MasterMedList}/>
        <Route exact path='/about' component={About}/>
      </Switch>
    </div>
  );
}

export default App;
