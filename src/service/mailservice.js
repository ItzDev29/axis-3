var nodemailer = require("nodemailer");
//-----------------------------------------------------------------------------
export async function sendMail(subject, toEmail, otpText) {
  var transporter = nodemailer.createTransport({
    service:'gmail',
    host:"smtp.gmail.com",
    port:587,
    secure:false,
    secureConnection:false,
    auth: {
      user: "admin@axisvnit.in",
      pass: "pjcxxvafqesqthjw",
    },
    tls:{
        rejectUnauthorized:false,
    }
    
  });

  var mailOptions = {
  
    from: "admin@axisvnit.in",
    to:toEmail,
    subject:subject,
    html: otpText,
  
  };

const server = await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error: any, success: any) {
      if (success) {
        resolve(success)
      }
      reject(error)
    })
  })
  if (!server) {
    return {message:"Server error"}
  }

  const success = await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailData).then((info: any, err: any) => {
      if (info.response.includes('250')) {
        resolve(true)
      }
      reject(err)
    })
  })

  if (!success) {
  return {message:"Error 500"}
  }
return {message:"Success"}
}
}

