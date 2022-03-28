import React from "react";

export const ContactForm = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <input
        name="name"
        type="text"
        id="name"
        placeholder="Your Name"
        onChange={props.nameChange}
        value={props.name}
      />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Your Email Address"
        onChange={props.emailChange}
        value={props.email}
      />
      <textarea
        name="message"
        id="message"
        placeholder="Your Message"
        onChange={props.messageChange}
        value={props.message}
      />
      <button
        type="submit"
        className="button accent-button form-submit"
      >
        {props.button}
      </button>
    </form>
  );
};
