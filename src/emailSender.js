const nodemailer = require('nodemailer');

export function sendEmail(name, phone, comment, email) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'kalinovskyi.jewelry@gmail.com',
      pass: 'Diana21082010',
    },
  });

  const mailOptions = {
    from: 'kalinovskyi.jewelry@gmail.com',
    to: email,
    subject: 'New contact request',
    html: `<p>Name: ${name}</p><p>Phone: ${phone}</p><p>Comment: ${comment}</p>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
}

// module.exports = { sendEmail };
