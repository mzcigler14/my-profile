// src/components/Contact.js
import React from "react";
import { Typography, TextField, Button, Box } from "@mui/material";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [fromEmail, setFromEmail] = useState("");
  const [fromName, setFromName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [errorSending, setErrorSending] = useState(false);
  const [formError, setFormError] = useState("");

  const emailTemplateParams = {
    from_email: fromEmail,
    from_name: fromName,
    subject: subject,
    message: message,
  };

  const validateEmail = (email) => {
    return email.includes("@") && email.includes(".");
  };

  const handleSend = (e) => {
    if (!validateEmail(fromEmail)) {
      setFormError("Please enter a valid email address.");
      return;
    }
    if (!fromName || !fromEmail || !subject || !message) {
      setFormError("Please fill in all fields.");
      return;
    }

    setFormError("");
    sendEmail(e);
  };
  const sendEmail = (e) => {
    console.log(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
    e.persist();
    e.preventDefault();
    setSending(true);
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        emailTemplateParams,
        { publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY }
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result);
          setSent(true);
          setSending(false);
        },
        (error) => {
          console.error("Error sending email:", error);
          setSending(false);
          setErrorSending(true);
        }
      );
  };
  const renderContent = () => {
    if (sending) {
      return (
        <Typography variant="body1" sx={{ mt: 6 }}>
          Sending Email...
        </Typography>
      );
    } else if (sent) {
      return (
        <Typography variant="body1" sx={{ mt: 6 }}>
          Thank you {fromName} for reaching out! I will respond as soon as
          possible, I look forward to collaborating!
        </Typography>
      );
    } else if (errorSending) {
      <Typography variant="body1" sx={{ mt: 6, color: "red" }}>
        There was an error sending the email, please reload and try again. Sorry
        for the inconvenience.
      </Typography>;
    }
    return (
      <>
        {formError && (
          <Typography variant="body1" sx={{ mt: 2, color: "red" }}>
            {formError}
          </Typography>
        )}
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
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          onClick={(e) => handleSend(e)}
        >
          Send Email to Matjaz
        </Button>
      </>
    );
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
      {renderContent()}
    </Box>
  );
};

export default ContactForm;
