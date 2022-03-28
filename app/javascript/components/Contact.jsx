import React, { useState } from "react";
import ax from "../modules/csrfToken";
import { ContactForm } from "./ContactForm";

export const Contact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  const nameChange = (e) => {
    setContact({
      name: e.target.value,
      email: contact.email,
      message: contact.message,
    });
  };

  const emailChange = (e) => {
    setContact({
      name: contact.name,
      email: e.target.value,
      message: contact.message,
    });
  };

  const messageChange = (e) => {
    setContact({
      name: contact.name,
      email: contact.email,
      message: e.target.value,
    });
  };

  const sendMessage = e => {
    e.preventDefault();
    console.log(contact);
  };

  return (
    <div className="form-container text-center">
      <h1>Say hello</h1>
      <p>
        Interested in hiring me? Just want to say hey? Send me a message through
        the form below.
      </p>
      <ContactForm
        name={contact.name}
        email={contact.email}
        message={contact.message}
        nameChange={nameChange}
        emailChange={emailChange}
        messageChange={messageChange}
        onSubmit={sendMessage}
        button="Send Message"
      />
    </div>
  );
};
