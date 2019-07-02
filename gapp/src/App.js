import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar"
import Search from "./pages/search";
import Books from "./pages/books";
import NoMatch from "./pages/nomatch";
import "./App.css";


function App () {

    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/books" component={Books} />
            <Route component={NoMatch} />
          </Switch>
      </div>
      </Router>
      
    );
  }

export default App;
