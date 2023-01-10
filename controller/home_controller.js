const EmailMailers = require('../mailers/email_mailers');
const User = require('../models/user');
const RP = require('../models/ResetPassword');
const crypto = require('crypto');

module.exports.home = function(req,res){
    if(req.isAuthenticated()){
        res.redirect('/users/preview');
    }   
    return res.render('home',{
        title : 'Home Page'
    });
}
module.exports.forgetps = function(req,res){
    if(req.isAuthenticated()){
        res.redirect('/users/preview');
    }
    return res.render('forgetps',{
        title : "Forgot Password"
    });
}

module.exports.SendMeMail = function(req,res){
    User.findOne({email : req.body.email},function(err,user){
        if(err){console.log('err while sending the mail ',err);return}
        RP.create({
            user : user.id,
            token : crypto.randomBytes(20).toString('hex'),
            is_valid : true
        },function(err,rp){
            if(err){console.log('err while sending the mail ',err);return}
            let data = {
                email : req.body.email,
                maildata : {
                    token : rp.token,
                    name : user.name
                }
            }
            EmailMailers.newEmail(data);
            req.flash('success','mail is send successfully');
            return res.redirect('/');
        });
    });
}
