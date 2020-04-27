import React from "react";

import { Typography, makeStyles, Button } from "@material-ui/core";
import { ArrowForward } from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    caption: {
        width: "450px",
        transform: "translate(840px,250px)",
    },
    button1: {
        background: "#00367D",
        width: "190px",
        transform: "translate(840px,280px)",
    },
    button2: {
        width: "190px",
        transform: "translate(840px,280px)",
    },
});

const Body = () => {
    const classes = useStyles();

    return (
        <>
            <Typography
                className={classes.caption}
                variant='h4'
                color='primary'>
                Keep getting better
            </Typography>
            <Button
                component={Link}
                to='/update'
                variant='outlined'
                className={classes.button1}>
                <Typography color='primary'>Update now</Typography>
            </Button>
            <Button
                component={Link}
                to='/feature'
                endIcon={<ArrowForward color='primary' />}
                className={classes.button2}>
                <Typography color='primary'>Learn more</Typography>
            </Button>
        </>
    );
};

export default Body;
