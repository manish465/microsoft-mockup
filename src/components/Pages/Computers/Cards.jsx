import React from "react";

import data from "./data";

import {
    Card,
    makeStyles,
    CardMedia,
    Box,
    Typography,
    Button,
} from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

const useStyles = makeStyles({
    cards: { marginTop: "50px" },
    cardRight: {
        display: "flex",
        position: "relative",
        left: "35%",
        borderRadius: "24px",
        background: "#E5E5E5",
        width: "1200px",
        height: "430px",
        marginBottom: "40px",
    },
    cardLeft: {
        display: "flex",
        position: "relative",
        left: "5%",
        borderRadius: "24px",
        background: "#E5E5E5",
        width: "1200px",
        height: "430px",
        marginBottom: "30px",
    },
    text: { margin: "auto", marginRight: "30%" },
    cardImg: { margin: "auto", marginTop: "30px", marginLeft: "60px" },
    name: { color: "#535353", marginBottom: "80px", fontWeight: "bold" },
    label: { color: "#535353", marginBottom: "40px" },
    labelButton: { color: "#005A95", marginTop: "40px" },
});

const Cards = () => {
    const classes = useStyles();
    const Cards = data.map((card, key) => (
        <Card
            key={key}
            className={card.left ? classes.cardLeft : classes.cardRight}
            variant='outlined'>
            <CardMedia
                className={classes.cardImg}
                style={{ width: "360px" }}
                component='img'
                image={card.imgUrl}
                alt=''
            />
            <Box className={classes.text}>
                <Typography variant='h4' className={classes.name}>
                    {card.name}
                </Typography>
                <Typography className={classes.label}>{card.label}</Typography>
                <Button
                    endIcon={<KeyboardArrowRightIcon />}
                    className={classes.labelButton}>
                    <Typography>{card.linkText}</Typography>
                </Button>
            </Box>
        </Card>
    ));

    return <div className={classes.cards}>{Cards}</div>;
};

export default Cards;
