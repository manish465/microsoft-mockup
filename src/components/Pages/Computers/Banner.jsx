import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

import bgImg from "../../../assets/computers/banner/bannerBg.png";

const useStyles = makeStyles({
    banner: {
        marginTop: "20px",
        height: "230px",
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
    },
    bannerTextHeading: {
        fontWeight: "bold",
        marginTop: "10px",
        color: "#1C1C1C",
    },
    bannerTextContent: { marginTop: "30px", width: "1500px", margin: "auto" },
});

const Banner = () => {
    const classes = useStyles();

    return (
        <div className={classes.banner}>
            <Typography
                align='center'
                variant='h2'
                className={classes.bannerTextHeading}>
                Stay focused, stay in touch
            </Typography>
            <Typography align='center' className={classes.bannerTextContent}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Exercitationem, nihil, fugiat cumque magnam veritatis
                consequuntur provident ipsam nemo distinctio aperiam quod natus
                eveniet, quasi alias aliquam quibusdam. Numquam, ratione porro?
            </Typography>
        </div>
    );
};

export default Banner;
