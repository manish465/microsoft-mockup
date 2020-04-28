import React from "react";

import { Box, Typography, makeStyles, Grid } from "@material-ui/core";

import data from "./data";

const useStyles = makeStyles({
    heading: {
        boxShadow: "10px 10px 8px rgb(255,255,255,0.2)",
        padding: "5px",
        margin: "auto",
        maxWidth: "fit-content",
        fontWeight: "bold",
        backgroundColor: "white",
    },
    subHeadings: { marginTop: "30px" },
    caption: { color: "#005A95", marginTop: "20px" },
});

const Body = () => {
    const classes = useStyles();

    const subHeading = data.subHeading.map((item, key) => (
        <Grid key={key} item xs={3}>
            <Typography className={classes.heading} variant='h5'>
                {item.heading}
            </Typography>
            {item.items.map((item, key) => (
                <Typography
                    key={key}
                    align='center'
                    className={classes.caption}
                    color='secondary'>
                    {item}
                </Typography>
            ))}
        </Grid>
    ));

    return (
        <Box>
            <Typography variant='h4' align='center' className={classes.heading}>
                {data.heading}
            </Typography>
            <Grid
                className={classes.subHeadings}
                container
                justify='space-around'>
                {subHeading}
            </Grid>
        </Box>
    );
};

export default Body;
