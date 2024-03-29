const User = require('../models/user.js');
const RP = require('../models/ResetPassword');
const crypto = require('crypto');
const Post = require('../models/Post');
const Comment = require('../models/comment');
const cloudinary = require('../config/cloudinary');

module.exports.SignUp = function(req,res){
    if(req.isAuthenticated()){
        res.redirect('/users/preview');
    }
    return res.render('sign_up',{
        title : 'Sign Up'
    });
}
module.exports.Preview = async function(req,res){
    try{
        let posts = await Post.find({})
        .populate({path:"user"})
        .populate({
            path : "comments",
            populate : {
                path : "user"                
            }
        })
        .populate({
            path : "likes",
            populate : {
                path : 'user'
            }
        })
        
        return res.render('preview',{
            title : "Home",
            posts : posts            
        })
    }catch(err){
        console.log('error in the preview method --> ',err);
        return;
    }    
}
module.exports.Profile = async function(req,res){
    if(req.params.id != 333){
        let user = await User.findById(req.params.id);
        return res.render('profile',{
            title : 'Profile',
            data : user
        })
    }    
    console.log(req.user)
    return res.render('profile',{
        title : "Profile",
        data : null
    });
}
// module.exports.openProfile = async function(req,res){// the new functionality
//     console.log('hiii',req.params.id);
    

// }

module.exports.create = function(req,res){    
    if(req.body.password != req.body.confirm_password) return res.redirect('back');

    User.findOne({email : req.body.email},function(err,user){
        if(err) {console.log('error in finding in user for creating user...');return;}
        if(!user){
            User.create(req.body,function(err,user){
                if(err){console.log('errro while creating the user in db -->> ',err);return;}
                req.flash('success','user is created');
                return res.redirect('/');
            });
        }else{
            req.flash('error','Email already exists Try other one');
            return res.redirect('back');
        }
    });
}

module.exports.CreateSession = function(req,res){    
    req.flash('success','Logged In sucessfully');
    return res.redirect('/users/preview');
}

module.exports.destroySession = function(req,res){
    
    req.logout(function(err) {        
        if (err) { return next(err); } 
        req.flash('success','Logged Out successfully')       
        res.redirect('/');
    });   
}

// rendering the reset password page with sending the token 
module.exports.Reset = function(req,res){
    RP.findOne({token:req.params.token},function(err,rp){
        if(err){console.log('err rendering reset page ',err);return}
        return res.render('ResetPassword',{
            title : "Reset Password",
            token : req.params.token,
            valid : rp.is_valid
        });
    });    
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
            
            req.flash('success','Password is Updated successfully !!');
            return res.redirect('/users/preview');
        }
    }catch(err){
        console.log('error in update password... ',err);
        return res.redirect('/');
    }    
}

module.exports.UpdateUser = async function(req,res){//need to change the function after and also look for routes of 4 parameter when multer
    try{
        let user = await User.findById(req.user.id);
        
        if(user && req.body.name){
            user.name = req.body.name;
            user.save();
        }
        if(req.file && user){
            if(!user.dp){
                user.dp = await cloudinary.Upload(req.file.path, req.file.filename);
                user.save();
            }else{
                let PublicId = user.dp;
                PublicId = PublicId.split('/')[7].slice(0,32);
                await cloudinary.Delete(PublicId);
                //deleted the old picture and move towords the new upload of dp in the database
                user.dp = await cloudinary.Upload(req.file.path, req.file.filename);
                user.save();                
            }
        }
        return res.redirect('back');
    }catch(err){
        console.log('error in update-user -->> ',err);
        return res.redirect('back');
    }
}

