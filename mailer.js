const nodemailer = require('nodemailer');
const { URL } = require('./config');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function sendAlert(price) {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to:   process.env.EMAIL_USER,
    subject: `🐾 Price Drop Alert! Cat feeder is now $${price}`,
    html: `
      <h2>Price dropped to <strong>$${price}</strong></h2>
      <p><a href=${URL}>Buy on Amazon</a></p>
    `,
  });
}

module.exports = { sendAlert };