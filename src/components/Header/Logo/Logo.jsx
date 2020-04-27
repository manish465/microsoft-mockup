import React from "react";
import { Typography, makeStyles, IconButton } from "@material-ui/core";
import logoImg from "../../../assets/logo/logo.png";
import { Link } from "react-router-dom";

const useStyles = makeStyles({ logo: { margin: "10px" } });

const Logo = () => {
    const classes = useStyles();

    return (
        <>
            <IconButton component={Link} to='/'>
                <img className={classes.logo} src={logoImg} alt='Logo' />
                <Typography color='primary' variant='h4'>
                    Microsoft
                </Typography>
            </IconButton>
        </>
    );
};

export default Logo;
