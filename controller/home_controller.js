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
