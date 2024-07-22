const nodemailer = require("nodemailer");
const axios = require("axios");

export default async function handler(req, res) {
  const message = "Кто-то только что посетил ваш сайт.";

  // Настройка для отправки email
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "testgithub347@gmail.com",
      pass: "Qwerty123!",
    },
  });

  const mailOptions = {
    from: "testgithub347@gmail.com",
    to: "dimasta.mc@gmail.com",
    subject: "Новый посетитель на сайте",
    text: message,
  };

  try {
    // Отправка email
    await transporter.sendMail(mailOptions);
    console.log("Email sent");

    // Отправка уведомления в Telegram
    // const token = 'YOUR_TELEGRAM_BOT_TOKEN';
    // const chat_id = 'YOUR_CHAT_ID';
    // const telegram_api_url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(message)}`;

    // await axios.get(telegram_api_url);
    // console.log('Telegram message sent');

    // res.status(200).send('Notification sent');
  } catch (error) {
    console.error(error);
    res.status(500).send("Error sending notification");
  }
}
