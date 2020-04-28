import React from "react";
import Header from "../../Header/Header";

import bgImg from "../../../assets/update/Background.png";

import { Box, makeStyles, Grid, Typography, Button } from "@material-ui/core";

const useStyles = makeStyles({
    update: {
        backgroundImage: `url(${bgImg})`,
        height: "100vh",
    },
    headingText: {
        fontFamily: "Segoe UI",
        fontWeight: "bolder",
    },
});

const UpdateNow = () => {
    const classes = useStyles();

    return (
        <Box className={classes.update}>
            <Header />
            <Grid container justify='space-around' alignItems='center'>
                <Grid item>
                    <Typography
                        variant='h1'
                        className={classes.headingText}
                        color='primary'>
                        What New
                    </Typography>
                </Grid>
                <Grid item>
                    <Button
                        style={{ background: "#00367D" }}
                        variant='contained'>
                        <Typography color='primary'>Update now</Typography>
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default UpdateNow;
