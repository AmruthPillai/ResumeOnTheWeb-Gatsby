import React, { useRef, useState } from "react";
import Heading from "../components/Heading";
import { IoIosPaperPlane } from "../components/Icons";
import Button from "../components/Button";

const Contact = () => {
  const nameRef = useRef(null);
  const [name, setName] = useState("");

  const emailRef = useRef(null);
  const [email, setEmail] = useState("");

  const messageRef = useRef(null);
  const [message, setMessage] = useState("");

  const [buttonText, setButtonText] = useState("Send Message");

  const isEmailValid = email => {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const onSubmit = e => {
    let formValid = true;
    e.preventDefault();

    if (!name) {
      formValid = false;
      const nodeName = nameRef.current;
      nodeName.classList.add("border-red-500", "animated", "shake");
      setTimeout(() => {
        nodeName.classList.remove("border-red-500", "animated", "shake");
      }, 2000);
    }

    if (!email || !isEmailValid(email)) {
      formValid = false;
      const nodeName = emailRef.current;
      nodeName.classList.add("border-red-500", "animated", "shake");
      setTimeout(() => {
        nodeName.classList.remove("border-red-500", "animated", "shake");
      }, 2000);
    }

    if (!message) {
      formValid = false;
      const nodeName = messageRef.current;
      nodeName.classList.add("border-red-500", "animated", "shake");
      setTimeout(() => {
        nodeName.classList.remove("border-red-500", "animated", "shake");
      }, 2000);
    }

    if (formValid) {
      const url = "api/sendEmail";
      const opts = {
        method: "POST",
        body: JSON.stringify({ name, email, message }),
      };

      fetch(url, opts)
        .then(() => {
          setButtonText("Message Received!");
          setName("");
          setEmail("");
          setMessage("");
        })
        .catch(() => setButtonText("An Error Occurred!"));
    }
  };

  return (
    <section id="contact">
      <Heading icon={IoIosPaperPlane} title="Contact" />

      <form className="lg:w-2/3 xl:w-1/2">
        <label htmlFor="name" className="w-4/5 md:w-2/3 flex flex-col">
          <h6 className="font-semibold text-sm mb-2">Full Name</h6>
          <input
            required
            id="name"
            name="name"
            type="text"
            ref={nameRef}
            placeholder="Regina Phalange"
            onChange={e => setName(e.target.value)}
            className="border-2 border-gray-700 focus:border-gray-300 px-4 py-2 text-lg bg-transparent duration-200 focus:outline-none"
          />
          <p className="text-xs mt-2">The one where you tell me your name</p>
        </label>

        <label htmlFor="email" className="mt-2 w-4/5 md:w-2/3 flex flex-col">
          <h6 className="font-semibold text-sm mb-2">Email Address</h6>
          <input
            required
            id="email"
            name="email"
            type="email"
            ref={emailRef}
            placeholder="regina@example.com"
            onChange={e => setEmail(e.target.value)}
            className="border-2 border-gray-700 focus:border-gray-300 px-4 py-2 text-lg bg-transparent duration-200 focus:outline-none"
          />
          <p className="text-xs mt-2">
            The one where you tell me how I can contact you back
          </p>
        </label>

        <label htmlFor="message" className="mt-2 flex flex-col">
          <h6 className="font-semibold text-sm mb-2">Message</h6>
          <textarea
            required
            rows="4"
            id="message"
            name="message"
            ref={messageRef}
            placeholder="Type your message here"
            onChange={e => setMessage(e.target.value)}
            className="border-2 border-gray-700 focus:border-gray-300 px-4 py-2 text-lg bg-transparent duration-200 focus:outline-none"
          />
          <p className="text-xs mt-2">
            The one where you tell me what I can do to help you
          </p>
        </label>

        <Button
          type="submit"
          className="mt-6"
          icon={IoIosPaperPlane}
          title={buttonText}
          onClick={onSubmit}
        />
      </form>
    </section>
  );
};

export default Contact;
