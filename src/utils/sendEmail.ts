import nodemailer from "nodemailer";

export async function sendMail(to: string, message: string) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "sumitjha.gcp@gmail.com",
      pass: process.env.APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: "sumitjha.gcp@gmail.com",
    to: to,
    subject: "Otp for your ghost dating.",
    text: message,
  };

  await transporter.sendMail(mailOptions);
}
