import React from "react";
import { AppBar, makeStyles, Toolbar } from "@material-ui/core";
import logoImg from "../assets/logo/logo.svg";

const useStyles = makeStyles({ appBar: { background: "transparent" } });

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position='static' variant='outlined' className={classes.appBar}>
            <Toolbar>
                <img src={logoImg} alt='Logo' />
            </Toolbar>
        </AppBar>
    );
};

export default Header;
