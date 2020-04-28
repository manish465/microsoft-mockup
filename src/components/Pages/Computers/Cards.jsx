import React from "react";

import data from "./data";

import { Card, makeStyles, CardMedia } from "@material-ui/core";

const useStyles = makeStyles({
    cards: { marginTop: "50px" },
    cardRight: {
        position: "relative",
        left: "35%",
        borderRadius: "24px",
        background: "#E5E5E5",
        width: "1200px",
        height: "430px",
        marginBottom: "40px",
    },
    cardLeft: {
        position: "relative",
        left: "5%",
        borderRadius: "24px",
        background: "#E5E5E5",
        width: "1200px",
        height: "430px",
        marginBottom: "30px",
    },
});

const Cards = () => {
    const classes = useStyles();
    const Cards = data.map((card, key) => (
        <Card
            className={card.left ? classes.cardLeft : classes.cardRight}
            variant='outlined'>
            <CardMedia
                style={{ width: "360px" }}
                component='img'
                image={card.imgUrl}
                alt=''
            />
        </Card>
    ));

    return <div className={classes.cards}>{Cards}</div>;
};

export default Cards;
