import React from "react";
import Header from "../../Header/Header";
import BannerText from "./BannerText";
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
        </Box>
    );
};

export default Home;
