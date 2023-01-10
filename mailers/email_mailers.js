const nodeMailer = require('../config/nodemailer');

exports.newEmail = (maildata) => {
    let htmlString = nodeMailer.renderTemplate({email : maildata.maildata},'/emails/ResetPs.ejs');
    nodeMailer.transporter.sendMail({
        from : 'jscheck170@gmail.com',
        to : maildata.email,
        subject : 'Reset Password From Nodejs Authentication',
        html : htmlString
    },(err,info) => {
        if(err){console.log('Error in sending mail ',err);return;}
        //console.log('message send! ',info);
        return;
    });
}