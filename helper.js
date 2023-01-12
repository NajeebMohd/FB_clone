module.exports.getCallbackUrl = function(){
    if(process.env.environment == 'prod'){
        return 'https://hungry-toga-newt.cyclic.app/users/auth/google/callback'
    }else{
        return 'http://localhost:8000/users/auth/google/callback';
    }
    
}