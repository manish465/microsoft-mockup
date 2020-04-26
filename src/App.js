import React from "react";
import "./App.module.css";
import Home from "./components/Pages/Home/Home";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({ palette: { primary: { main: "#DBDBDB" } } });

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Home />
        </ThemeProvider>
    );
};

export default App;
