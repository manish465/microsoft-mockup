import React from "react";
import "./App.module.css";

import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import { Route } from "react-router-dom";

import Home from "./components/Pages/Home/Home";
import UpdateNow from "./components/Pages/UpdateNow/UpdateNow";
import Apps from "./components/Pages/Apps/Apps";
import Feature from "./components/Pages/Feature/Feature";
import Computers from "./components/Pages/Computers/Computers";
import Support from "./components/Pages/Support/Support";

const theme = createMuiTheme({ palette: { primary: { main: "#DBDBDB" } } });

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Route path='/' exact component={Home} />
            <Route path='/update' component={UpdateNow} />
            <Route path='/apps' component={Apps} />
            <Route path='/feature' component={Feature} />
            <Route path='/computers' component={Computers} />
            <Route path='/support' component={Support} />
        </ThemeProvider>
    );
};

export default App;
