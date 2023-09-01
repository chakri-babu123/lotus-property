const nodemailer = require("nodemailer");

const sendMailer = async (req, res) => {
    let testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'cristian.hilll@ethereal.email',
            pass: 'YHVzDycjJhWbNhXgCN'
        }
    });

    let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <newmail@example.com>', // sender address
        to: "chakribabu.epixelweb@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });

      console.log("message send",info.messageId);
      res.json(info);
      
    };

    
    module.exports = sendMailer;