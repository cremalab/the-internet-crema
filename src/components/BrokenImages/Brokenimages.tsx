import { Container, Typography } from "@material-ui/core";
import React from "react";


const imgStyle = {
    width: '120px',
    height: '90px'
};

const BrokenImages = () => (
    <Container style={{paddingTop: '50px'}}>
    <Typography variant="h2">Broken Images</Typography>

            <img style={imgStyle} src="asdf.jpg" />
            <img style={imgStyle} src="hjkl.jpg" />
            <img style={imgStyle} src="img/avatar-blank.jpg" />
     
        </Container>

);

export default BrokenImages;