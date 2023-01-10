const nodeMailer = require('../config/nodemailer');

exports.newEmail = (maildata) => {
    let htmlString = nodeMailer.renderTemplate({maildata : maildata.token},'/emails/ResetPs.ejs');
    nodeMailer.transporter.sendMail({
        from : 'jscheck170@gmail.com',
        to : maildata.email,
        subject : 'new comment has been published',
        html : htmlString
    },(err,info) => {
        if(err){console.log('Error in sending mail ',err);return;}
        //console.log('message send! ',info);
        return;
    });
}