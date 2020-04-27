import React from "react";

import Header from "../../Header/Header";
import BannerText from "./BannerText";
import BottomNavigationBar from "./BottomNavigationBar";
import Options from "./Options";
import Body from "./Body";

import { Box, makeStyles } from "@material-ui/core";

import bgImg from "../../../assets/home/Background.png";

const useStyles = makeStyles({
    home: {
        height: "100vh",
        backgroundImage: `url(${bgImg})`,
    },
});

const Home = () => {
    const classes = useStyles();

    return (
        <Box component='div' className={classes.home}>
            <Header />
            <BannerText />
            <Body />
            <Options />
            <BottomNavigationBar />
        </Box>
    );
};

export default Home;
