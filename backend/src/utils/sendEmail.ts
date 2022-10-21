import { text } from "body-parser";
import nodemailer from 'nodemailer';

export const sendEmail = async (email: any, subject: any, text: any) => {
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            service: 'gmail',
            port: 465,
            secure: true,
            auth: {
                user: "scm.yethiha@gmail.com",
                pass: 'gzqyfvybcvzmxios',
            },
        });

        await transporter.sendMail({
            from: "scm.yethiha@gmail.com",
            to: email,
            subject: subject,
            text: text,
        });
        console.log("email sent successfully");
    } catch (error) {
        console.log(error, "email not sent");
    }
}



// const { text } = require("body-parser");
// const nodemailer = require("nodemailer");

// const sendEmail = async (email, subject, text) => {
   
// };

// module.exports = sendEmail;