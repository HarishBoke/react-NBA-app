import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/header";
import Home from  "./components/home/home";
import Teams from "./components/teams";



class App extends React.Component {
    
    render(){
        return(
            <div>
                <Home />
            </div>
        );
    }
}

ReactDOM.render(
<Router>
    <div>
    <Header />
    <Route exact path="/" component={App} />
    <Route path="/teams" component={Teams} />
    </div>
</Router>, document.getElementById("root"));