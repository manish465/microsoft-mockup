import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";

const data =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Labore, similique rem! Eum recusandae nam nobis.Ipsa, vero commodi a dolorem corrupti perferendis neque.Fuga, in asperiores ? Nemo impedit expedita magni.";

const useStyles = makeStyles({
    cards: {
        marginTop: "30px",
    },
    card: {
        padding: "40px",
        width: "565px",
        height: "548px",
        background: "rgb(28,28,28,0.7)",
        borderTopRightRadius: "50px",
        borderBottomLeftRadius: "50px",
    },
    headingCard: {
        color: "#DF0000",
    },
    cardBody: {
        marginTop: "20px",
    },
});

const Cards = () => {
    const classes = useStyles();

    return (
        <Grid className={classes.cards} container justify='space-around'>
            <Grid className={classes.card} item>
                <Typography className={classes.headingCard} variant='h5'>
                    Microsoft 365
                </Typography>
                <Typography
                    color='primary'
                    className={classes.cardBody}
                    variant='body1'>
                    {data}
                </Typography>
            </Grid>
            <Grid className={classes.card} item>
                <Typography className={classes.headingCard} variant='h5'>
                    Surface pro x
                </Typography>
                <Typography
                    color='primary'
                    className={classes.cardBody}
                    variant='body1'>
                    {data}
                </Typography>
            </Grid>
        </Grid>
    );
};

export default Cards;
