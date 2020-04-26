import React from "react";
import { Typography, Grid, makeStyles, IconButton } from "@material-ui/core";

const useStyles = makeStyles({
    bottomBar: {
        transform: "translate(0px,280px)",
    },
});

const BottomNavigationBar = () => {
    const classes = useStyles();

    return (
        <div>
            <Grid
                className={classes.bottomBar}
                justify='space-around'
                container>
                <IconButton>
                    <Typography variant='h5' color='primary'>
                        Feature
                    </Typography>
                </IconButton>
                <IconButton>
                    <Typography variant='h5' color='primary'>
                        Apps
                    </Typography>
                </IconButton>
                <IconButton>
                    <Typography variant='h5' color='primary'>
                        Computers
                    </Typography>
                </IconButton>
                <IconButton>
                    <Typography variant='h5' color='primary'>
                        Support
                    </Typography>
                </IconButton>
            </Grid>
        </div>
    );
};

export default BottomNavigationBar;
