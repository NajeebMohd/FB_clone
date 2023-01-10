const User = require('../models/user.js');
const RP = require('../models/ResetPassword');
const crypto = require('crypto');

module.exports.SignUp = function(req,res){
    if(req.isAuthenticated()){
        res.redirect('/users/preview');
    }
    return res.render('sign_up',{
        title : 'Sign Up'
    });
}
module.exports.Preview = function(req,res){
    return res.render('preview',{
        title : "Home"      
    });
}

module.exports.create = function(req,res){    
    if(req.body.password != req.body.confirm_password) return res.redirect('back');

    User.findOne({email : req.body.email},function(err,user){
        if(err) {console.log('error in finding in user for creating user...');return;}
        if(!user){
            User.create(req.body,function(err,user){
                if(err){console.log('errro while creating the user in db -->> ',err);return;}
                return res.redirect('/');
            });
        }else{
            return res.redirect('back');
        }
    });
}

module.exports.CreateSession = function(req,res){    
    return res.redirect('/users/preview');
}

module.exports.destroySession = function(req,res){
    
    req.logout(function(err) {        
        if (err) { return next(err); }        
        res.redirect('/');
    });   
}

// rendering the reset password page with sending the token 
module.exports.Reset = function(req,res){
    return res.render('ResetPassword',{
        title : "Reset Password",
        token : req.params.token
    })
}
// to make a token and send a get request to render the reset password page
module.exports.ResetPassword = function(req,res){
    RP.create({
        user : req.user.id,
        token : crypto.randomBytes(20).toString('hex'),
        is_valid : true
    },function(err,rp){
        if(err){
            console.log('error while creating RP ',err);
            return res.redirect('back');
        }        
        return res.redirect('/users/Reset_Password/'+rp.token);
    });    
}
// when user submits the form to change the password iam gonna just update it 
module.exports.UpdatePassword = async function(req,res){
    
    if(req.body.password != req.body.confirm_password) res.redirect('back');
    try{
        let rp = await RP.findOne({token : req.params.token});
                
        if(rp.is_valid){
            let user = await User.findByIdAndUpdate(rp.user);
            user.password = req.body.password;
            user.save();
            rp.is_valid = false;
            rp.save();
            return res.redirect('/users/preview');// think about it how we are gonna return the user when password is changed
        }
    }catch(err){
        console.log('error in update password... ',err);
        return res.redirect('/');
    }    
}

