import React from "react";

import data from "./data";

import {
    Fab,
    makeStyles,
    Grid,
    Typography,
    Backdrop,
    CircularProgress,
} from "@material-ui/core";
import GetAppIcon from "@material-ui/icons/GetApp";

const useStyles = makeStyles((theme) => ({
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
    fab: {
        background: "green",
        marginLeft: "80px",
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        background: "rgb(0,0,0,0.1)",
    },
}));

const Cards = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen(!open);
    };

    const card = data.map((item, key) => (
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
                    <Fab className={classes.fab} onClick={handleToggle}>
                        <GetAppIcon color='primary' />
                    </Fab>
                    <Backdrop
                        className={classes.backdrop}
                        open={open}
                        onClick={handleClose}>
                        <CircularProgress variant='indeterminate' />
                    </Backdrop>
                </Typography>
            </Grid>
        </Grid>
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
