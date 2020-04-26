import React from "react";
import { AppBar, makeStyles, Toolbar, Grid } from "@material-ui/core";
import Logo from "./Logo/Logo";
import Tabs from "./Tabs/Tabs";

const useStyles = makeStyles({
    appBar: { background: "transparent" },
});

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position='static' variant='outlined' className={classes.appBar}>
            <Toolbar>
                <Grid justify='space-between' alignItems='center' container>
                    <Grid item>
                        <Logo />
                    </Grid>
                    <Grid item>
                        <Tabs />
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
