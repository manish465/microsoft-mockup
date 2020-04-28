import React from "react";
import Header from "../../Header/Header";

import bgImg from "../../../assets/feature/bgImg.png";

import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    feature: {
        height: "2435px",
        backgroundImage: `url(${bgImg})`,
        backgroundPositionY: "340px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },
});

const Feature = () => {
    const classes = useStyles();

    return (
        <Box className={classes.feature}>
            <Header />
        </Box>
    );
};

export default Feature;
