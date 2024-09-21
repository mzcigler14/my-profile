// src/components/AboutMe.js
import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import '../styles.css';

const AboutMe = () => {
  return (
    <Box className="home-container">
      <Typography variant="h3" gutterBottom>Hi, I'm Matjaz</Typography>
      <Typography variant="body1" paragraph>
        I’m a dedicated software developer with a passion for building impactful applications. 
        My skills range from front-end development using React to back-end services with Node.js. 
        I’m continuously improving and eager to take on new challenges in the tech space.
      </Typography>
      <Button variant="contained" color="primary" sx={{ marginRight: 2 }}>View Resume</Button>
      <Button variant="outlined" color="primary">Get in Touch</Button>
    </Box>
  );
};

export default AboutMe;
