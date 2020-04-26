import React from "react";
import Header from "../../Header/Header";
import { Box, makeStyles, Typography } from "@material-ui/core";
import bgImg from "../../../assets/home/Background.png";

const useStyles = makeStyles({
    home: {
        height: "100vh",
        backgroundImage: `url(${bgImg})`,
    },
    bannerText1: {
        width: "600px",
        transform: "translate(837px,234px)",
        color: "#6D6D6D",
    },
    bannerText2: {
        width: "600px",
        transform: "translate(1111px,234px)",
    },
});

const Home = () => {
    const classes = useStyles();

    return (
        <Box component='div' className={classes.home}>
            <Header />
            <Typography variant='h1' className={classes.bannerText1}>
                THE BEST
            </Typography>
            <Typography
                color='primary'
                variant='h1'
                className={classes.bannerText2}>
                WINDOWS
            </Typography>
        </Box>
    );
};

export default Home;
