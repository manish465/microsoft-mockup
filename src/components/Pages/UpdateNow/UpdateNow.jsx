import React from "react";
import Header from "../../Header/Header";
import Banner from "./Banner";

import bgImg from "../../../assets/update/Background.png";

import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    update: {
        backgroundImage: `url(${bgImg})`,
        height: "100vh",
    },
});

const UpdateNow = () => {
    const classes = useStyles();

    return (
        <Box className={classes.update}>
            <Header />
            <Banner />
        </Box>
    );
};

export default UpdateNow;
