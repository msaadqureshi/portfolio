import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify"; // Import react-toastify
import { themeContext } from "../../Context";

import "react-toastify/dist/ReactToastify.css"; // Import the CSS for toast messages

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      displayErrors(validationErrors);
    } else {
      emailjs
        .sendForm(
          "service_xgdc5nq",
          "template_2zjelbe",
          form.current,
          "xXZuXMi5aM4PX_d-c"
        )
        .then(
          (result) => {
            console.log(result.text);
            setDone(true);
            form.current.reset(); // Use form.current to access the HTML form element
            displaySuccessMessage();
          },
          (error) => {
            console.log(error.text);
            displayErrorMessage();
          }
        );
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!form.current.from_name.value.trim()) {
      errors.name = "Name is required";
    }

    if (!form.current.email_id.value.trim()) {
      errors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
        form.current.email_id.value
      )
    ) {
      errors.email = "Invalid email address";
    }

    if (!form.current.message.value.trim()) {
      errors.message = "Message is required";
    }

    return errors;
  };

  const displayErrors = (errors) => {
    for (const field in errors) {
      toast.error(errors[field], { position: "top-right" });
    }
  };

  const displaySuccessMessage = () => {
    toast.success("Thanks for Contacting me", { position: "top-right" });
  };

  const displayErrorMessage = () => {
    toast.error("An error occurred. Please try again later.", {
      position: "top-right",
    });
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{ color: darkMode ? "white" : "" }}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="from_name"
            className="user"
            placeholder="Name"
          />
          <input
            type="email"
            name="email_id"
            className="user"
            placeholder="Email"
          />
          <textarea name="message" className="user" placeholder="Message" />
          <input type="submit" value="Send" className="button" />
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
