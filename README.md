


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/akg07/Node-Authentication">
    <img src="https://w7.pngwing.com/pngs/787/679/png-transparent-computer-icons-login-authentication-security-miscellaneous-logo-fingerprint.png" alt="Logo" width="80" height="80">
  </a>

  <h1 align="center">Node Authentication</h1>

  <p align="center">
    An authenticaiton configuration which can be attach to any project 
    <br>
    Project hosted Link: https://hungry-toga-newt.cyclic.app
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project


This project is a complete package for all authentication related features.


Here's what features it includes:
* Login and signup 
* Google signIn/ SignUp feature included
* Change password using link (in case of forgot password)
* Upate password while logged in 
* User's password has been stored in encrypted manner
* Password change link will be sent in email
* Show real-time notification while login or signup and password change process


Of course, There are some scope to modify and update the existing feature. I am open for all suggestions and I will try to continously upgarde the features as time goes.


<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Sample Images
Here are some sample images of the project. Have a quick look

#### Login page 

![L](https://user-images.githubusercontent.com/113420077/216622756-7a1e5d03-927f-4400-9b45-6480de0ffc6e.png)

#### Home page 

![hp](https://user-images.githubusercontent.com/113420077/216622888-e7b0af4f-ddfc-4615-9588-98ad8d29e778.png)

#### create account 

![Ca ](https://user-images.githubusercontent.com/113420077/216622941-30b831c0-43f7-44e3-8a28-cb3090f373e0.png)

#### forgot password page
![rp](https://user-images.githubusercontent.com/113420077/216623216-a8440570-3f7c-4ebc-ba5d-5cedfb59cb22.png)


#### Update password page 

![rpp](https://user-images.githubusercontent.com/113420077/216623121-2c6db182-60c6-446d-aee3-e865f5fb0a52.png)


### Built With

This project is build with various libraries and frameworks. Some of them is listed below

* [Node Js](https://nodejs.org/en/)
* [Express Js](http://expressjs.com/)
* [Nodemailer](http://nodemailer.com/about/)
* [Passport Js](https://www.passportjs.org/)
* [Bootstrap](https://getbootstrap.com/)
* [Mongoose](https://mongoosejs.com/docs/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

For start the project you need to have some prerequisites.

### Prerequisites
npm is mandatory for install and runing the project

* npm
  ```sh
  npm install npm@latest -g
  ```
  
  
### Configure

<ol>
   <li>before running the server you need to create a project in google you can search as (console developer google) and while creating project when you asked about (Authorized javascript origins) fill the value as (http://localhost:8000) and fill the value for (Authorized redirect URI's) as (http://localhost:8000/users/auth/google/callback)</li>
   <li>you will be getting the client ID and Client Secret fill these values in config/passport-google-oauth-strategy.js</li>
   <li>in the config/nodemailer.js the Transporter is responsible to send you mail if you click forget password. choose any of your email that so that you can receive from </li>
  <li>i have already provided you google project just give email and pass in the config/nodemailer</li>
</ol>

### Installation

Clone the project from Git and install all the required libraries for the project

1. Clone the repo
   ```sh
   git clone https://github.com/NajeebMohd/Nodejs_Authentication.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>






<!-- CONTACT -->
## Contact
In Case of any issue related to project setup or anything please contact me on mohdnajeeb9642@gmail.com 

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Geeks for Geeks](https://www.geeksforgeeks.org/)
* [Font Awesome](https://fontawesome.com)
* [W3 Schools](https://www.w3schools.com)
<p align="right">(<a href="#readme-top">back to top</a>)</p>

