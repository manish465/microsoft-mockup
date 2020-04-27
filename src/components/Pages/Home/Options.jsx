import React from "react";

import { Typography, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    options: {
        width: "200px",
        transform: "translate(50px,150px)",
    },
});

const Options = () => {
    const classes = useStyles();

    return (
        <div>
            <Grid className={classes.options} direction='column' container>
                <Typography variant='h5' color='primary'>
                    OFFICE
                </Typography>
                <Typography variant='h5' color='primary'>
                    WINDOWS
                </Typography>
                <Typography variant='h5' color='primary'>
                    XBOX
                </Typography>
                <Typography variant='h5' color='primary'>
                    ALL MICROSOFT
                </Typography>
                <Typography variant='h5' color='primary'>
                    STORE
                </Typography>
            </Grid>
        </div>
    );
};

export default Options;
