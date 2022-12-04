import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const FromEmail = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const currentForm = form.current;
    if (currentForm == null) return; 

    emailjs
      .sendForm(
        "service_i3lq9uo",
        "template_ki5ay0w",
        currentForm,
        "iYQbCRPFNViGXBMn1"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default FromEmail;
