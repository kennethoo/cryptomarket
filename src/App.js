

import React, {Component} from "react";
import "./App.css"
import Home from "./home"
import People from "./people"
import City from "./city"
import Map from "./map"
import {BrowserRouter, Route,Redirect, Switch} from "react-router-dom"
class App extends Component{
  render(){
    return(

      <BrowserRouter>
      <Switch>
        <Route exact path="/">
       <Home/>
        </Route>
        <Route exact path="/people">
       <People/>
        </Route>
        <Route exact path="/map">
       <Map/>
        </Route>
        <Route exact path="/city">
       <City/>
        </Route>
      </Switch>

      </BrowserRouter>

    )
  }
}

export default App;
