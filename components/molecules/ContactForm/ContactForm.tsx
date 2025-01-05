"use client";
// import Heading48 from "@/components/atoms/Heading48/Heading48";
import InputField from "@/components/atoms/InputField/InputField";
// import { BookPlus, Mail, NotebookPen, UserRound } from "lucide-react";
import { sendContactEmail } from "@/lib/emailService";
import React, { useState } from "react";

const ContactForm = ({ isAppointment }: { isAppointment?: boolean }) => {
  const [signUpForm, setSignUpForm] = useState({
    name: "",
    subject: "",
    phone: "",
    email: "",
    message: "",
  });

  // const [loading, seLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const { name, email, subject, message: description } = signUpForm;
    if (!name || !email || !subject || !description) {
      alert("Please fill all the required field");
      return;
    }
    setIsLoading(true);

    await sendContactEmail(signUpForm);

    setIsLoading(false);
  };
  return (
    <div
      className="w-full max-w-[1280px] rounded-lg sm:p-6 p-0 flex justify-end bg-cover bg-center bg-no-repeat " 
      style={{ backgroundImage: `url(/Images/full-shot-people-cleaning-office-scaled.jpg)` }}
    >
      <div className="space-y-4 w-full sm:w-auto sm:p-6 p-0 bg-white rounded-lg">
        <div>
          <h2 className=" text-cyanblue text-2xl font-semibold tracking-tight mb-1">
            {isAppointment ? "Book an appointment" : "Contact us"}
          </h2>
          {/* <div className="h-0.5 w-16 bg-primary/90" /> */}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <InputField
                // id="name"
                type="text"
                name="name"
                value={signUpForm.name}
                onChangeTest={(e: string) =>
                  setSignUpForm({ ...signUpForm, name: e })
                }
                placeholderText="Your Name"
              />
            </div>
            <div className="space-y-1">
              <InputField
                // id="phone"
                name="phone"
                type="tel"
                value={signUpForm.phone}
                onChangeTest={(e: string) =>
                  setSignUpForm({ ...signUpForm, phone: e })
                }
                placeholderText="Phone Number"
              />
            </div>
            <div className="space-y-1">
            <InputField
              // id="email"
              name="email"
              type="email"
              value={signUpForm.email}
              onChangeTest={(e: string) =>
                setSignUpForm({ ...signUpForm, email: e })
              }
              placeholderText="Email"
            />
          </div>
          <div className="space-y-1">
            <InputField
              // id="email"
              name="subject"
              type="text"
              value={signUpForm.subject}
              onChangeTest={(e: string) =>
                setSignUpForm({ ...signUpForm, subject: e })
              }
              placeholderText="Subject"
            />
          </div>
          </div>

          <div className="space-y-1">
            <textarea
              id="message"
              name="message"
              value={signUpForm.message}
              onChange={(e: { target: { value: string } }) =>
                setSignUpForm({ ...signUpForm, message: e.target.value })
              }
              placeholder="Message"
              className=" text-base text-cyanblue min-h-[80px] w-full border-b-2 placeholder-cyanblue border-gray-500 focus:outline-none" 
              required
            />
          </div>

          <div className="">
            <button
              disabled={isLoading}
              className="bg-primarygreen hover:bg-primarygreen10 font-medium text-white py-4 px-10 text-center  rounded-full"
              type="submit"
            >
              {isLoading ? (
                  
                  "Sending..."
                ) : (
                  'Submit'
                )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
