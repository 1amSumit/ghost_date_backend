import nodemailer from "nodemailer";

export async function sendMail(to: string, message: string) {
  console.log(process.env.APP_PASSWORD);
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

  try {
    const res = await transporter.sendMail(mailOptions);
  } catch (err) {
    console.log(err);
  }
}
