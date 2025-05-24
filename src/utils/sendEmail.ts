import nodemailer from "nodemailer";

export async function sendMail(to: string, otp: string) {
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
    subject: "Hello from ghost dating.",
    text: `Your otp is ${otp}`,
  };

  try {
    const res = await transporter.sendMail(mailOptions);
  } catch (err) {
    console.log(err);
  }
}
