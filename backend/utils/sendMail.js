const nodemailer = require("nodemailer")

const sendMail = async (message, to) => {

const transporter = nodemailer.createTransport({
    service:"gmail",
    auth: {
        user: "proctor.ai.main@gmail.com",
        pass: process.env.GMAIL_APP_KEY,
    },
})

await transporter.sendMail({
    from: `ProctorAI`,
    to: to,
    subject: "Entry Token Proctor AI",
    text: message
  });


}

module.exports = sendMail;

