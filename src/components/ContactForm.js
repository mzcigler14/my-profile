// src/components/Contact.js
import React from "react";
import { Typography, TextField, Button, Box } from "@mui/material";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Form } from "react-router-dom";

// const sendEmail = (e) => {
//   e.persist();
//   e.preventDefault();
//   setIsSubmitting(true);
//   emailjs
//     .sendForm(
//       process.env.REACT_APP_SERVICE_ID,
//       process.env.REACT_APP_TEMPLATE_ID,
//       e.target,
//       process.env.REACT_APP_PUBLIC_KEY
//     )
//     .then(
//       (result) => {
//         setStateMessage('Message sent!');
//         setIsSubmitting(false);
//         setTimeout(() => {
//           setStateMessage(null);
//         }, 5000); // hide message after 5 seconds
//       },
//       (error) => {
//         setStateMessage('Something went wrong, please try again later');
//         setIsSubmitting(false);
//         setTimeout(() => {
//           setStateMessage(null);
//         }, 5000); // hide message after 5 seconds
//       }
//     );

//   // Clears the form after sending the email
//   e.target.reset();
// };

const ContactForm = () => {
  const [fromEmail, setFromEmail] = useState("");
  const [fromName, setFromName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const emailTemplateParams = {
    from_email: fromEmail,
    from_name: fromName,
    subject: subject,
    message: message,
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": {
          m: 1,
          width: { xs: "100%", sm: "75%", md: "50%", lg: "40%" }, // Responsive width
        },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        required
        id="name"
        label="Your Name"
        value={fromName}
        variant="outlined"
        onChange={(e) => setFromName(e.target.value)}
      />
      <TextField
        required
        id="email"
        label="Your Email"
        value={fromEmail}
        variant="outlined"
        onChange={(e) => setFromEmail(e.target.value)}
      />
      <TextField
        required
        id="subject"
        label="Subject"
        value={subject}
        variant="outlined"
        onChange={(e) => setSubject(e.target.value)}
      />
      <TextField
        required
        id="message"
        label="Message"
        value={message}
        multiline
        rows={7}
        variant="outlined"
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
        Send Email to Matjaz
      </Button>
    </Box>
  );
};

export default ContactForm;
