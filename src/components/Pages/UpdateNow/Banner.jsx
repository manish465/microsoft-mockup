import React from "react";
import { Grid, Typography, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    banner: {
        marginTop: "100px",
    },
    headingText: {
        fontFamily: "Segoe UI",
        fontWeight: "bolder",
    },
});

const Banner = () => {
    const classes = useStyles();

    return (
        <Grid
            className={classes.banner}
            container
            justify='space-around'
            alignItems='center'>
            <Grid item>
                <i>
                    <Typography
                        variant='h1'
                        className={classes.headingText}
                        color='primary'>
                        What New
                    </Typography>
                </i>
            </Grid>
            <Grid item>
                <Button style={{ background: "#00367D" }} variant='contained'>
                    <Typography color='primary'>Update now</Typography>
                </Button>
            </Grid>
        </Grid>
    );
};

export default Banner;
