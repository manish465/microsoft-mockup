import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const useStyles = makeStyles({
    bannerTitle: {
        marginTop: "50px",
    },
});

const Banner = () => {
    const classes = useStyles();

    return (
        <Box textAlign='center' className={classes.bannerTitle}>
            <Typography
                style={{ marginRight: "400px" }}
                variant='h1'
                color='primary'>
                Introducing the new
            </Typography>
            <Typography
                style={{ marginLeft: "400px" }}
                variant='h1'
                color='secondary'>
                Features of Microsoft
                <ArrowForwardIcon
                    style={{ marginLeft: "10px", fontSize: "100px" }}
                />
            </Typography>
        </Box>
    );
};

export default Banner;
