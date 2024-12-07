"use client";
import Heading48 from "@/components/atoms/Heading48/Heading48";
import InputField from "@/components/atoms/InputField/InputField";
import { BookPlus, Mail, NotebookPen, UserRound } from "lucide-react";
import { sendContactEmail } from "@/lib/emailService";
import React, { useState } from "react";
// import { SMTPClient } from 'emailjs'
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [signUpForm, setSignUpForm] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const [loading, seLoading] = useState(false)

  const submitForm = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const { name, email, subject, message: description } = signUpForm;
    if (!name || !email || !subject || !description) {
      alert("Please fill all the required field");
      return;
    }
    seLoading(true)

    await sendContactEmail(signUpForm);

    seLoading(false)

  };
  return (
    <div className=" max-lg:w-full w-[60%] h-[900px] ">
      <div className=" flex w-full max-lg:pl-0 pl-8 h-full items-end">
        <div className=" w-full lg:w-[95%] text-cyanblue">
          <Heading48 heading="Contact Us" />
          <br />
          <br />
          <br />

          <form onSubmit={submitForm} className="flex w-full flex-col gap-2">
            <div className="relative">
              <InputField
                name={"name"}
                value={signUpForm.name}
                type={"text"}
                onChangeTest={(e: string) =>
                  setSignUpForm({ ...signUpForm, name: e })
                }
                placeholderText={"Enter your name"}
              />

              <UserRound size={20} className="absolute right-5 top-7" />
            </div>

            <div className="relative">
              <InputField
                name={"email"}
                value={signUpForm.email}
                type={"email"}
                onChangeTest={(e: string) =>
                  setSignUpForm({ ...signUpForm, email: e })
                }
                placeholderText={"Enter your email"}
              />
              <Mail size={20} className="absolute right-5 top-7" />
            </div>

            <div className="relative">
              <InputField
                name={"subject"}
                value={signUpForm.subject}
                type={"text"}
                onChangeTest={(e: string) =>
                  setSignUpForm({ ...signUpForm, subject: e })
                }
                placeholderText={"Enter your subject"}
              />

              <BookPlus size={20} className="absolute right-5 top-7" />
            </div>

            <div className="relative">
              <textarea
                className="text-lg w-full bg-lightGrey pl-10 py-6 font-medium placeholder-cyanblue focus:outline-none"
                rows={10}
                onChange={(e: { target: { value: string } }) =>
                  setSignUpForm({ ...signUpForm, message: e.target.value })
                }
                placeholder="Enter your message "
                cols={40}
                name="message"
              ></textarea>

              <NotebookPen size={20} className="absolute right-5 top-7" />
            </div>
            <div className=" my-3">
              <p>
                <button
                  disabled={ loading }
                  className="bg-skyblue text-cyanblue py-[23px] px-[30px] text-center w-full "
                  type="submit"
                >Submit Request</button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
