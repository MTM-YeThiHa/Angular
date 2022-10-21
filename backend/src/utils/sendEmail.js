"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const sendEmail = (email, subject, text) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const transporter = nodemailer_1.default.createTransport({
            host: 'smtp.gmail.com',
            service: 'gmail',
            port: 465,
            secure: true,
            auth: {
                user: "scm.yethiha@gmail.com",
                pass: 'gzqyfvybcvzmxios',
            },
        });
        yield transporter.sendMail({
            from: "scm.yethiha@gmail.com",
            to: email,
            subject: subject,
            text: text,
        });
        console.log("email sent successfully");
    }
    catch (error) {
        console.log(error, "email not sent");
    }
});
exports.sendEmail = sendEmail;
// const { text } = require("body-parser");
// const nodemailer = require("nodemailer");
// const sendEmail = async (email, subject, text) => {
// };
// module.exports = sendEmail;
