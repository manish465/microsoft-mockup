import React from "react";

import { Box, makeStyles, Typography } from "@material-ui/core";

import bgImg from "../../../assets/support/bg.png";

const useStyles = makeStyles({
    banner: {
        padding: "50px",
        marginTop: "20px",
        height: "100vh",
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: "no-repeat",
    },
    text: {
        fontWeight: "bolder",
    },
});

const Banner = () => {
    const classes = useStyles();

    return (
        <Box className={classes.banner}>
            <Typography
                color='primary'
                className={classes.text}
                align='center'
                variant='h3'>
                Welcome to Microsoft Support
            </Typography>
        </Box>
    );
};

export default Banner;
