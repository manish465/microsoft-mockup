import React from "react";

import { Typography, Grid, makeStyles, IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    bottomBar: {
        transform: "translate(0px,210px)",
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
                <IconButton component={Link} to='/feature'>
                    <Typography variant='h5' color='primary'>
                        Feature
                    </Typography>
                </IconButton>
                <IconButton component={Link} to='/apps'>
                    <Typography variant='h5' color='primary'>
                        Apps
                    </Typography>
                </IconButton>
                <IconButton component={Link} to='/computers'>
                    <Typography variant='h5' color='primary'>
                        Computers
                    </Typography>
                </IconButton>
                <IconButton component={Link} to='/support'>
                    <Typography variant='h5' color='primary'>
                        Support
                    </Typography>
                </IconButton>
            </Grid>
        </div>
    );
};

export default BottomNavigationBar;
