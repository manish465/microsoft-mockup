import React from "react";
import { AppBar, makeStyles, Toolbar } from "@material-ui/core";
import Logo from "./Logo/Logo";

const useStyles = makeStyles({
    appBar: { background: "transparent" },
});

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position='static' variant='outlined' className={classes.appBar}>
            <Toolbar>
                <Logo />
            </Toolbar>
        </AppBar>
    );
};

export default Header;
