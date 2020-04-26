import React from "react";
import Header from "./components/Header/Header";
import "./App.module.css";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({ palette: { primary: { main: "#DBDBDB" } } });

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Header />
        </ThemeProvider>
    );
};

export default App;
