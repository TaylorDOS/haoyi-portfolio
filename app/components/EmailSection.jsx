"use client";
import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "../api/email";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSONdata,
      });

      if (response.ok) {
        console.log("Message sent.");
        setEmailSubmitted(true);
        console.error("Failed to send email.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 pb-12 gap-4 relative"
    >

      <div>
        <h3 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
          Let&apos;s Connect
        </h3>
        <p className="text-gray-600 mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-4">
          <Link href="mailto:haoyi2@hotmail.com" aria-label="Email">
            <FaEnvelope
              size={50}
              className="text-slate-500 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/tanhaoyi/" aria-label="LinkedIn" target="_blank">
            <FaLinkedin
              size={50}
              className="text-slate-500 hover:text-secondary-400 transition-all duration-300 transform hover:scale-110"
            />
          </Link>
          <Link href="https://www.github.com/taylorDOS" aria-label="Github" target="_blank">
            <FaGithub
              size={50}
              className="text-slate-500 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
            />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-black block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-white border border-gray-400 placeholder-[#9CA2A9] text-black text-sm rounded-lg block w-full p-2.5"
                placeholder="coolkid@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-black block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-white border border-gray-400 placeholder-[#9CA2A9] text-black text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-black block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-white border border-gray-400 placeholder-[#9CA2A9] text-black text-sm rounded-lg block w-full p-2.5"
                placeholder="Let&apos;s talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-br from-primary-500 to-secondary-500 hover:opacity-90 text-white font-medium py-2.5 px-5 rounded-lg w-full transition-all duration-300 shadow-md"
            >
              Message
            </button>

          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;