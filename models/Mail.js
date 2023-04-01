
var nodemailer = require('nodemailer');

 class Mail{
    async sendmail(to, subject, body){

    
    
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'aniket.dkamble18@gmail.com',
              pass: 'etfdrwftrxddobpf'
            }
          });
          
          var mailOptions = {
            from: 'aniket.dkamble18@gmail.com',
            to: to,
            subject: subject,
            htm: body
          };
          
          await transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                return false;
                // res.end(JSON.stringify({status : "failed", data : err}));   
            } else {
                return true;
                // res.end(JSON.stringify({status : "success", data : result}));
            }
          });
    }
}
module.exports = Mail;