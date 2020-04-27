import React from "react";
import Header from "../../Header/Header";
import Cards from "./Cards";

import bgImg from "../../../assets/apps/bg.png";

import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    apps: {
        height: "100vh",
        background: `url(${bgImg})`,
    },
});

const Apps = () => {
    const classes = useStyles();

    return (
        <Box className={classes.apps} component='div'>
            <Header />
            <Cards />
        </Box>
    );
};

export default Apps;
