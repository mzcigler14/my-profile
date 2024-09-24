// src/components/Layout.js
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  CssBaseline,
  Container,
  Button,
} from "@mui/material";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <Box sx={{ position: "relative", minHeight: "100vh" }}>
      <Box
        component="header"
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "#f5f5f5",
          zIndex: 1000, // Ensure the header stays on top
        }}
      >
        <CssBaseline />
        <AppBar position="static" sx={{ backgroundColor: "#2e3b55" }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Matjaz Portfolio
            </Typography>
            <Button color="inherit" component={Link} to="/">
              About Me
            </Button>
            <Button color="inherit" component={Link} to="/projects">
              Projects
            </Button>
            <Button color="inherit" component={Link} to="/photos">
              Photos
            </Button>
            <Button color="inherit" component={Link} to="/contact">
              Contact
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      <Container sx={{ mt: 12, flexGrow: 1 }}>
        <Outlet />
      </Container>

      {/* <Box
        component="footer"
        sx={{
          padding: 10,
          py: 3,
          px: 5,
          mt: "auto",
          backgroundColor: "#2e3b55",
          color: "white",
        }}
      >
        <Container maxWidth="sm">
          <Typography align="center" variant="body1">
            © 2024 Matjaz Portfolio
          </Typography>
        </Container>
      </Box> */}
    </Box>
  );
};

export default Layout;
