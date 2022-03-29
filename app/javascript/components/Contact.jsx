import React, { useState, useEffect } from "react";
import ax from "../modules/csrfToken";
import { ContactForm } from "./ContactForm";

export const Contact = () => {
  useEffect(() => {
    document.title = "Contact — Dalton Huey";
  }, [])
  const [formSubmitted, setFormSubmitted] = useState(false);
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

  const sendMessage = async (e) => {
    e.preventDefault();
    try {
      let request = await ax.post(
        "http://localhost:3000/api/v1/messages",
        contact
      );
      console.log(request);
      if (request.status === 201) {
        setFormSubmitted(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-container text-center">
      <h1>Say hello</h1>
      <p className="form-comment">
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
        hide={formSubmitted}
      />
    </div>
  );
};
