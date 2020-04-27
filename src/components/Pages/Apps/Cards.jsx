import React from "react";

import data from "./data";

import { IconButton, makeStyles, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles({
    card: {
        padding: "20px",
        marginBottom: "20px",
        width: "552px",
        height: "248px",
        background: "#535353",
        borderRadius: "40px",
    },
    text: {
        marginLeft: "40px",
        marginTop: "20px",
        fontFamily: "Yu Gothic",
    },
});

const Cards = () => {
    const classes = useStyles();

    const card = data.map((item, key) => (
        <IconButton>
            <Grid container className={classes.card} key={key}>
                <Grid item>
                    <img src={item.imgUrl} alt='' />
                </Grid>
                <Grid>
                    <Typography
                        style={{ fontWeight: "bold" }}
                        className={classes.text}
                        variant='h5'>
                        {item.name}
                    </Typography>
                    <Typography className={classes.text} variant='h5'>
                        {item.downloads}
                    </Typography>
                    <Typography className={classes.text} variant='h5'>
                        free
                    </Typography>
                </Grid>
            </Grid>
        </IconButton>
    ));

    return (
        <Grid
            justify='space-around'
            alignItems='center'
            container
            direction='row'>
            {card}
        </Grid>
    );
};

export default Cards;
