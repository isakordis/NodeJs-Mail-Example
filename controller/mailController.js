const nodemailer = require('nodemailer');

var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "----",
      pass: "-----"
    }
  });

const message = {
    from: 'isa.kordis02@gmail.com', // Sender address
    to: 'isa-75f32e@inbox.mailtrap.io',         // List of recipients
    subject: 'Deneme', // Subject line
    text: 'Deneme Mail ' // Plain text body
};
transport.sendMail(message, function(err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log(info);
    }
});

module.exports=transport;
