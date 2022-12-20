const nodemailer = require("nodemailer");
require("dotenv").config();

exports.sendMail = async (req, res) => {
  try {
    const { name, surname, email, message } = req.body;

    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.MAIL,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `${name} ${surname} <${email}>`, // sender address
      to: "kiemtienonline2357@gmail.com", // list of receivers
      subject: "Contact | The Coffee Shop", // Subject line
      html: `<strong>Người gửi:</strong> ${name} ${surname}
        <br>
        <strong>Địa chỉ email:</strong> ${email}
        <br>
        <strong>Thông điệp:</strong> ${message}`, // html body
    });

    await transporter.sendMail({
      from: '"The Coffee Shop ☕" <kiemtienonline2357@gmail.com>', // sender address
      to: email, // list of receivers
      subject: "Contact | The Coffee Shop", // Subject line
      html: `<strong>Xin chào!</strong> <br> 
      Sevgili <strong>${name} ${surname},</strong> 
      <br> 
      Yêu cầu của bạn đã đến với chúng tôi.
      Chúng tôi sẽ cung cấp thông tin phản hồi càng sớm càng tốt. 🖤🚀
      <br>
      <br>
      <em><strong>Quán cà phê Ekibi</strong></em> ☕`, // html body
    });

    res.status(200).json({ status: "success", message: "Yêu cầu của bạn đã được nhận." });
  } catch (err) {
    res
      .status(400)
      .json({ status: "fail", message: "Không thể nhận được yêu cầu của bạn.", error: err });
  }
};
