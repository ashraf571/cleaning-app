"use client";
import emailjs from "@emailjs/browser";
interface ContactUs {
  message?: string;
  subject?: string;
  name: string;
  email: string;
}

interface Secrets {
  publicKey: string;
  serviceId: string;
}

interface SendEmail {
  secrets: Secrets;
  userDetail: Record<string, unknown>;
  templateId: string;
}

export const sendEmail = async ({
  secrets,
  userDetail,
  templateId,
}: SendEmail) => {
  emailjs
    .send(secrets.serviceId as string, templateId, userDetail, {
      publicKey: secrets.publicKey,
    })
    .then(
      (response) => {
        return Promise.resolve({
          status: response.status,
          text: response.text,
        });
      },
      (err) => {
        console.log(err);
        
        return Promise.reject({ status: "FAILED" });
      }
    );
};

export const sendContactEmail = async (params: ContactUs) => {
  const { email, subject, name, message } = params;
  try {
    const secrets = await fetch("/api/email-secrets", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await secrets.json();
    await sendEmail({
      secrets: data,
      userDetail: {name,email},
      templateId: "template_vofmz75",
    });

    // contact us

    await sendEmail({
      secrets: data,
      userDetail: {email, subject, name, message },
      templateId: "template_e4v62jy",
    });

    return true;
  } catch (error) {
    console.log("error", error);
    
    return false;
  }
};
