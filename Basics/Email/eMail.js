var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'example123@gmail.com',
    pass: 'examplepassword'
  }
});

var mailOptions = {
  from: 'example123@gmail.com',
  to: 'betterexample123@yahoo.com, bestexample123@outlook.com',
  subject: 'Sending Email using Node.js',
  html: <p>Node.js Email successful</p>
};

transporter.sendMail(mailOptions, function(error, info){
  if (error){
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
})
