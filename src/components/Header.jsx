import React from "react";
import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import logoImg from "../assets/logo/logo.png";

const useStyles = makeStyles({
    appBar: { background: "transparent" },
    logo: { margin: "10px" },
});

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position='static' variant='outlined' className={classes.appBar}>
            <Toolbar>
                <img className={classes.logo} src={logoImg} alt='Logo' />
                <Typography variant='h4'>Microsoft</Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
