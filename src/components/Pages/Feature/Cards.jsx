import React from "react";

import data from "./data";

import { makeStyles, Box, Typography } from "@material-ui/core";

const useStyles = makeStyles({
    cards: {
        marginBottom: "30px",
        boxShadow: "5px 5px 10px rgb(0,0,0,0.5)",
        borderTopRightRadius: "50px",
        borderBottomRightRadius: "50px",
        width: "1280px",
        height: "340px",
        backgroundColor: "#2E2E2E",
    },
    iconImage: {
        margin: "auto",
        marginTop: "30px",
        marginLeft: "40px",
    },
    content: { width: "820px", margin: "auto" },
});

const Cards = () => {
    const classes = useStyles();
    const cards = data.map((card, key) => (
        <div
            key={key}
            style={{ marginTop: "70px", display: "flex" }}
            className={classes.cards}>
            <img className={classes.iconImage} src={card.imgUrl} alt='icon' />
            <Typography
                color='primary'
                variant='body1'
                className={classes.content}>
                {card.content}
            </Typography>
        </div>
    ));

    return <Box>{cards}</Box>;
};

export default Cards;
