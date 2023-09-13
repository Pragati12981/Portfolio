const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser'); // Middleware for parsing the request body
require('dotenv').config(); // Load environment variables

const app = express();
const port = 3000; // Change to your desired port

// Middleware for parsing JSON request bodies
app.use(bodyParser.json());
app.post('/newmail', (req, res) => {
  const { name, email, subject, message } = req.body
  var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
          user: "pragati2020@ecajmer.ac.in",
          pass: "ibbgbjtkqhzxlrim",
      },
  });

  var mailOptions = {
      from: "pragati2020@ecajmer.ac.in",
      to: "pragati2020@ecajmer.ac.in",
      subject: subject,
      html: `
      <h5>Detail Information</h5>
      <ul>
        <li><p>Name : ${name}</p></li>
        <li><p>Email : ${email}</p></li>
        <li><p>Message : ${message}</p></li>
      </ul>
    `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
          console.log(error);
          return res.status(500).send({
              success:false,
              message:"send email API Error",
              error
          });
      } else {
          console.log("Email sent: " + info.response);
          return res.status(200).send({
              success:true,
              message:"your message send",
          });
      }
  });
})