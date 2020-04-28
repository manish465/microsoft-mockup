import React from "react";

import { Grid, Button } from "@material-ui/core";
import MouseIcon from "@material-ui/icons/Mouse";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";

const Buttons = () => {
    return (
        <Grid justify='space-around' container style={{ marginTop: "30px" }}>
            <Grid item>
                <Button
                    size='large'
                    style={{ color: "#005A95" }}
                    startIcon={<MouseIcon />}>
                    ACCESSORIES
                </Button>
            </Grid>
            <Grid item>
                <Button
                    size='large'
                    style={{ color: "#005A95" }}
                    startIcon={<PhoneAndroidIcon />}>
                    SYNC YOUR PHONE
                </Button>
            </Grid>
        </Grid>
    );
};

export default Buttons;
