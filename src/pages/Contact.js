// src/components/Contact.js
import React from "react";
import { Typography, TextField, Button, Box } from "@mui/material";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <Box sx={{ textAlign: "center", mt: 2 }}>
      <Typography variant="h4" gutterBottom>
        Contact Me
      </Typography>
      <Typography variant="h8" paragraph>
        Email: mzcigler14@gmail.com
      </Typography>
      <Typography variant="h8" paragraph>
        Phone: +386 0 5 124 7484
      </Typography>
      <Typography variant="body1" paragraph>
        I'm always open to discussing new opportunities. Feel free to reach out
        to me by phone, email or via the form below!
      </Typography>

      <ContactForm />
    </Box>
  );
};

export default Contact;
