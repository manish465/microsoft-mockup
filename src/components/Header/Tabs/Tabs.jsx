import React from "react";
import { Grid, IconButton } from "@material-ui/core";
import {
    GitHub,
    Search,
    Notifications,
    PersonOutline,
} from "@material-ui/icons";

const Tabs = () => {
    return (
        <Grid container spacing={6}>
            <Grid item>
                <IconButton>
                    <GitHub color='primary' />
                </IconButton>
            </Grid>
            <Grid item>
                <IconButton>
                    <Search color='primary' />
                </IconButton>
            </Grid>
            <Grid item>
                <IconButton>
                    <Notifications color='primary' />
                </IconButton>
            </Grid>
            <Grid item>
                <IconButton>
                    <PersonOutline color='primary' />
                </IconButton>
            </Grid>
        </Grid>
    );
};

export default Tabs;
