import React from "react";
import { Typography, makeStyles } from "@material-ui/core";
import logoImg from "../../assets/logo/logo.png";

const useStyles = makeStyles({ logo: { margin: "10px" } });

const Logo = () => {
    const classes = useStyles();

    return (
        <>
            <img className={classes.logo} src={logoImg} alt='Logo' />
            <Typography color='primary' variant='h4'>
                Microsoft
            </Typography>
        </>
    );
};

export default Logo;
