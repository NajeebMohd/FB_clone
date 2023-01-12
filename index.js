require('dotenv').config();
const express = require('express');
const CookieParser = require('cookie-parser');
const app = express();
const port = process.env.PORT || 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const passportGoogle = require('./config/passport-google-oauth-strategy');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const flashMW = require('./config/middleware');


app.use(expressLayouts);
app.use(CookieParser());
app.set('layout extractStyles',true);
app.set('layout extractScripts', true);


app.use(express.urlencoded());



app.use(express.static('assets'));
app.set('view engine', 'ejs');
app.set('views','./views');


app.use(session({
    name : 'issue tracker',
    secret : 'issyou',
    saveUninitialized : false,
    resave : false,
    cookie : {
        maxAge : (1000 * 60 * 10)
    },
    // store:MongoStore.create(
    //     {
    //         mongoUrl : process.env.mongodburl,
    //         autoRemove : 'Disabled',
    //         mongoOptions : {}
    //     },
    //     function(err){
    //         console.log(err || 'connect mongodb connect ok');
    //     }
    // )
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

app.use(flash());
app.use(flashMW.setFlash);

app.use('/',require('./routes'));

app.listen(port,function(err){
    if(err){
        console.log('the error is : ',err);
        return;
    }
    console.log('server is started...');
});