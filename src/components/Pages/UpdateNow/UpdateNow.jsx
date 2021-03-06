import React from "react";
import Header from "../../Header/Header";
import Banner from "./Banner";
import Cards from "./Cards";

import bgImg from "../../../assets/update/Background.png";

import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    update: {
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "auto",
    },
});

const UpdateNow = () => {
    const classes = useStyles();

    return (
        <Box className={classes.update}>
            <Header />
            <Banner />
            <Cards />
        </Box>
    );
};

export default UpdateNow;
