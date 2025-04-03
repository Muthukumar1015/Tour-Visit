import nodemailer from "nodemailer";

export async function sendLoginEmail(email, name) {
  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    let info = await transporter.sendMail({
      from: `"GoTrip Support" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Successful Login - GoTrip",
      text: `Hello ${name},\n\nYou have successfully signed in.\n\n- GoTrip Team`,
      html: `<p>Hello <b>${name}</b>,</p><p>You have successfully signed in to <b>GoTrip</b>.</p><p>- GoTrip Team</p>`,
    });

    console.log("✅ Email sent:", info.messageId);
  } catch (error) {
    console.error("❌ Error sending email:", error);
  }
}
