import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { from_email, from_name, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: from_email,
      to: process.env.EMAIL_USER,
      subject: subject,
      text: `${from_name}(${from_email}) - ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).send("Email sent successfully.");
    } catch (error) {
      console.error(error);
      res.status(500).send("Error sending email.");
    }
  } else {
    res.status(405).send("Method Not Allowed");
  }
}
