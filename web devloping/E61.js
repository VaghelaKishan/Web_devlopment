// first node.js tutorial
//console.log("hello kishan");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  //res.end('Hello World');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Rameshwar Insurance</title>
  </head>
  <link href="https://fonts.googleapis.com/css?family=Baloo+Bhai&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
  <style>
      /* CSS Reset */
      body {
          font-family: 'Baloo Bhai', cursive;
          color: rgb(13, 13, 13);
          margin: 0px;
          padding: 0px;
          background: url('img/jj.jpg');
      }
  
      .left {
          display: inline-block;
          /* border: 2px solid red; */
          position: absolute;
          left: 40px;
          top: 0px;
      }
  
      .left img {
          width: 190px;
  
      }
  
      .left div {
          color: rgb(208, 45, 129);
          line-height: 0px;
          font-size: 22px;
          text-align: center;
      }
  
      .mid {
          display: block;
          width: 55%;
          margin: 29px auto;
          /* border: 2px solid green; */
      }
  
      .right {
          position: absolute;
          right: 34px;
          top: 45px;
          display: inline-block;
          /* border: 2px solid yellow; */
      }
  
      .navbar {
          display: inline-block;
      }
  
      .navbar li {
          display: inline-block;
          font-size: 20px;
      }
  
      .navbar li a {
          color: rgb(12, 12, 12);
          text-decoration: none;
          padding: 34px 23px;
  
      }
  
      .navbar li a:hover,
      .navbar li a.active {
          text-decoration: underline;
          color: rgb(83, 83, 80);
  
      }
  
      .btn {
          font-family: 'Baloo Bhai', cursive;
          margin: 0px 9px;
          background-color: black;
          color: white;
          padding: 4px 14px;
          border: 2px solid rgb(112, 111, 111);
          border-radius: 12px;
          font-size: 18px;
          cursor: pointer;
      }
  
      .btn:hover {
          background-color: rgb(101, 97, 97);
      }
  
      .container {
          border: 2px solid rgb(22, 17, 17);
          margin: 106px 80px;
          padding: 70px;
          width: 33%;
          border-radius: 28px;
      }
  
      .form-group input {
          font-family: 'Baloo Bhai', cursive;
          text-align: center;
          display: block;
          width: 508px;
          padding: 1px;
          border: 2px solid black;
          margin: 11px auto;
          font-size: 25px;
          border-radius: 8px;
      }
  
      .container h1 {
          text-align: center;
      }
  
      .container button {
          display: block;
          width: 74%;
          margin: 30px auto;
      }
  </style>
  
  <body>
      <header class="header">
          <!-- Left box for logo -->
          <div class="left">
              <img src="img/logo.jpg" alt="">
              <div>Insurance</div>
          </div>
          <!-- Mid box for navbar -->
          <div class="mid">
              <ul class="navbar">
                  <li><a href="#" class="active">Home</a></li>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Premium Calculator</a></li>
                  <li><a href="#">Contact Us</a></li>
              </ul>
          </div>
  
          <!-- Right box for buttons -->
          <div class="right">
              <button class="btn">Call Us Now</button>
              <button class="btn">Email Us</button>
          </div>
      </header>
      <div class="container">
          <h1>Join the best Insurance Advice</h1>
          <form action="noaction.php">
              <div class="form-group">
                  <input type="text" name="" placeholder="Enter your Name">
              </div>
              <div class="form-group">
                  <input type="text" name="" placeholder="Enter your Age">
              </div>
              <div class="form-group">
                  <input type="text" name="" placeholder="Enter your Gender">
              </div>
              <div class="form-group">
                  <input type="text" name="" placeholder="Enter your Locality">
              </div>
              <div class="form-group">
                  <input type="text" name="" placeholder="Enter your Email Id">
              </div>
              <div class="form-group">
                  <input type="text" name="" placeholder="Enter your Phone Number">
              </div>
              <button class="btn">Submit</button>
          </form>
      </div>
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});