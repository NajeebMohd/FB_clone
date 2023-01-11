# Nodejs_Authentication
### before running the server you need to create a project in google you can search as (console developer google) and while creating project when you asked about (Authorized javascript origins) fill the value as (http://localhost:8000) and fill the value for (Authorized redirect URI's) as (http://localhost:8000/users/auth/google/callback)
### you will be getting the client ID and Client Secret fill these values in config/passport-google-oauth-strategy.js
### in the config/nodemailer.js the Transporter is responsible to send you mail if you click forget password. choose any of your email that so that you can receive from that email but you email should have a 2-step verification.
## lastly you need mongodb application.
## before running the server run this command in terminal (npm i) and type npm start in terminal to start the server...
