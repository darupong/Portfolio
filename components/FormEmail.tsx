import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const FromEmail = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: { preventDefault: () => void }) => {
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
          Swal.fire({
            icon: "success",
            title: "Send Success!",
            text: "Your information will be sent to e-mail soon.",
            confirmButtonColor: "#36D399",
            confirmButtonText: "OK",
          });
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            confirmButtonColor: "#36D399",
            confirmButtonText: "OK",
          });
        }
      );
  };
  return (
    <section className="">
      <div className=" px-4 mx-auto max-w-screen-md min-h-screen">
        <h2 className="mb-4 text-[60px] font-bold text-center text-gray-900 dark:text-white">
          Contact Me
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Email:{" "}
          <span className="dark:text-[#36D399] text-gray-500">
            darupong000@gmail.com
          </span>{" "}
          <br />
          Phone:{" "}
          <span className="dark:text-[#36D399] text-gray-500">
            +66 89 733 7851
          </span>{" "}
          <br />
          Address:{" "}
          <span className="dark:text-[#36D399] text-gray-500">
            47/235 Soi Nong Rahaeng 3, Sam Wa Tawan Tok Sub-district, Klong Sam
            Wa, Bangkok 10510
          </span>
        </p>
        <form action="#" className="space-y-8" ref={form} onSubmit={sendEmail}>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              id="email"
              name="user_name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Username"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              name="user_email"
              id="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Email Address"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Message
            </label>
            <textarea
              name="message"
              className="block p-2.5 w-full h-[200px] text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <div className="flex justify-center pb-[20px]">
            <button
              className="btn btn-success text-white"
              type="submit"
              onSubmit={sendEmail}
            >
              Send
            </button>
          </div>
          
        </form>
        <div className="flex justify-center pb-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3873.831058956095!2d100.70421161508326!3d13.906500090247297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d7c81064b687d%3A0x3326337c087dbc5f!2sDarupong%20House!5e0!3m2!1sen!2sth!4v1698765432109!5m2!1sen!2sth"
              width="100%"
              height="400"
              style={{ border: 0, maxWidth: "800px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
      </div>
    </section>
  );
};

export default FromEmail;
