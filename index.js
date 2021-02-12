const nodemailer = require("nodemailer");
const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 5000

const app = express();

const corsOptions = {
  origin: process.env.PERMITTEDHOSTS.split(" "),
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

app.use(express.json());

app.post("/contact", (req, res) => {
  if (!("name" in req.body)) {
    res.status(400).send("Name required");
  } else if (!("email" in req.body)) {
    res.status(400).send("Email required");
  } else if (!("message" in req.body)) {
    res.status(400).send("Message required");
  } else {
    sendMail(req.body.name, req.body.email, req.body.message)
      .then(() => res.status(200).send({ msg: "SUCCESS" }))
      .catch((err) => res.send({ err }));
  }
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

function sendMail(name, email, message) {
  const transporter = nodemailer.createTransport({
    service: "Yahoo",
    host: "smtp.mail.yahoo.com",
    port: 465,
    secure: false,
    auth: {
      user: process.env.EMAILUSER,
      pass: process.env.EMAILPWD
    },
    debug: false,
    logger: true
  });

  return transporter.sendMail({
    from: `Contact Page <${process.env.EMAILUSER}@yahoo.com>`,
    to: process.env.TARGETEMAIL,
    subject: `Portfolio contact from ${name}`,
    text: `${message}
    
    Email: ${email}`
  });
}