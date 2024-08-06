const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendWelcomeEmail = (email, name) => {
  transporter
    .sendMail({
      from: "mshivang091@gmail.com",
      to: email,
      subject: "Welcome to the app",
      text: `Hi ${name},welcome to the app!`,
    })
    .then((info) => {
      console.log("Email sent: " + info.response);
    })
    .catch((error) => {
      console.log(error);
    });
};
const sendCancelEmail = (email, name) => {
  transporter
    .sendMail({
      from: "mshivang091@gmail.com",
      to: email,
      subject: "Sorry to see youy go",
      text: `Hi ${name},we hope to see you back soon!`,
    })
    .then((info) => {
      console.log("Email sent: " + info.response);
    })
    .catch((error) => {
      console.log(error);
    });
};
module.exports = {
  sendWelcomeEmail,
  sendCancelEmail,
};

// transporter
//   .sendMail({
//     from: "mshivang091@gmail.com",
//     to: "agarwal.kshitij01@gmail.com",
//     subject: "Sending Email using Node.js",
//     text: "That was easy!",
//     html: "<a href='https://chosmic-two.vercel.app/'> ekjvhnwrtngglkr</a>",
//   })
//   .then((info) => {
//     console.log(info);
//   })
//   .catch((e) => {
//     console.log(e);
//   });
