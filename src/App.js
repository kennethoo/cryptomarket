import React, { useEffect } from "react";
import "./App.css";
import Home from "./home";
import People from "./people";
import City from "./city";
import Map from "./map";
import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  const loadTheme = (theme) => {
    const root = document.querySelector("#root");
    root.setAttribute("color-scheme", `${theme}`);
    localStorage.setItem("mode", theme);
  };

  useEffect(() => {
    const mode = localStorage.getItem("mode");
    if (mode === null) {
      loadTheme("light");
    } else {
      loadTheme(mode);
    }
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/people">
          <People />
        </Route>
        <Route exact path="/map">
          <Map />
        </Route>
        <Route exact path="/city">
          <City />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
