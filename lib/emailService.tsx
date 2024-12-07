"use client";
import emailjs from "@emailjs/browser";

export const sendEmail = async (payload: any) => {

  const secrets : any = await fetch("/api/email-secrets", {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await secrets.json()
  
  emailjs
    .send(data.serviceId as string, payload.templateId, payload.templateParams, {
      publicKey: data.publicKey,
    })
    .then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        // return { "SUCCESS!", response.status, response.text }
      },
      (err) => {
        console.log("FAILED...", err);
      }
    );
};

const welcomeEmail = ({name, email}: { name: string, email: string }) => {
  const templateId = "template_vofmz75";
  const templateParams = {
    name,
    email,
  };

  sendEmail({ templateId, templateParams });
};

const contactUsEmail = ({ name, email, subject, message }: any) => {
  const templateId = "template_e4v62jy";
  const templateParams = {
    subject,
    name,
    email,
    message,
  };

  sendEmail({ templateId, templateParams });
};

export const sendContactEmail = (params: any) => {
  const { email, subject, name, message } = params

  welcomeEmail( {name, email });
  contactUsEmail({ email, subject, name, message });
};
