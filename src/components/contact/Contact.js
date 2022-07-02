import React, { useRef } from "react";
// import "./Contact.css";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephoneForward } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bwqmbrj",
        "template_hrs9njg",
        form.current,
        "H3228sqp0_i-c7TfW"
      )
      .then(
        (result) => {
          if (result.status == 200) {
            toast.success("Thank For Messaging👍❤️");
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="bg-[#111827] lg:h-screen">
      <div className="text-center text-white space-y-6 pt-20">
        <h1 className=" text-4xl relative z-0 inline-block px-1 font-semibold uppercase after:absolute after:-bottom-6 after:right-0  after:h-1 after:w-16 after:mr-12 after:-translate-y-2 after:bg-white after:content-['']">
          Contact
        </h1>
        <p className="text-[#0BA0A8] font-bold">
          Have a question or want to work together?
        </p>
      </div>
      <div
        id="contact"
        className="  contact-form grid lg:grid-cols-3 gap-4  lg:px-24 items-center py-7"
      >
        <div className="ml-10">
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=new"
            target="blank"
          >
            <AiOutlineMail className="inline-block text-secondary text-3xl font-bold" />
            <span className="ml-4 text-white font-bold">
              dulal.dpi.387364@gmail.com
            </span>
          </a>
          <p className="my-4">
            <BsTelephoneForward className="inline-block text-secondary text-3xl font-bold" />
            <span className="ml-4 text-white font-bold">01778613474</span>
          </p>
          <a
            href="https://www.google.com/maps/place/%E0%A6%97%E0%A6%BE%E0%A6%87%E0%A6%AC%E0%A6%BE%E0%A6%A8%E0%A7%8D%E0%A6%A7%E0%A6%BE/@25.3307216,89.5309674,15z/data=!3m1!4b1!4m13!1m7!3m6!1s0x39fd21ead5d6cdab:0xeb323b445279fb0e!2z4KaX4Ka-4KaH4Kas4Ka-4Kao4KeN4Kan4Ka-IOCmnOCnh-CmsuCmvg!3b1!8m2!3d25.3296928!4d89.5429652!3m4!1s0x39fd22d69e4357ab:0x6ecd8a9269ec86ca!8m2!3d25.3289765!4d89.5414925"
            target="blank"
          >
            <GoLocation className="inline-block text-secondary text-3xl font-bold" />
            <span className="ml-4 text-white font-bold">
              Gaibandha,Rangpur,BD
            </span>
          </a>
        </div>

        <div className=" px-10 lg:col-span-2">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="to_name"
              className="px-16  shadow-lg rounded  py-4 my-3 placeholder:ml-0 "
              placeholder="Name"
              required
            />
            <input
              type="email"
              name="from_name"
              className="px-16 my-5 py-4 shadow-lg rounded lg:my-4 lg:ml-3"
              placeholder="Email"
              required
            />
            <input
              type="text"
              required
              placeholder="Subject"
              className=" lg:px-56 sm: px-16  py-4 my-2 shadow rounded"
            />
            <textarea
              name="message"
              className="  lg:px-[225px] sm: px-[70px] py-5 shadow rounded my-3"
              placeholder="Message"
              required
            />
            <br />
            <input
              type="submit"
              value="Send Message"
              className="px-5 py-3 bg-secondary rounded cursor-pointer text-white font-bold"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
