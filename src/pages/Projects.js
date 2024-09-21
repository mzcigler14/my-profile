// src/components/Projects.js
import React from 'react';
import { Typography, Grid, Card, CardContent, CardActions, Button } from '@mui/material';

const projects = [
  {
    title: 'Project One',
    description: 'A web application built with React and Node.js that allows users to manage tasks efficiently.',
    link: '#'
  },
  {
    title: 'Project Two',
    description: 'A machine learning model that predicts housing prices using Python and scikit-learn.',
    link: '#'
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>Projects</Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>{project.title}</Typography>
                <Typography variant="body2" paragraph>{project.description}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href={project.link} target="_blank">View Project</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Projects;
