import React from "react";

import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
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

const BannerText = () => {
    const classes = useStyles();

    return (
        <>
            <Typography variant='h1' className={classes.bannerText1}>
                THE BEST
            </Typography>
            <Typography
                color='primary'
                variant='h1'
                className={classes.bannerText2}>
                WINDOWS
            </Typography>
        </>
    );
};

export default BannerText;
