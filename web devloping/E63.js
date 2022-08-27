// blocking & non-blockingcode

// Synchronous or blocking
//    -line by line execution
// ASynchronous or non-blocking
//    -line by line execution not guaranteed
//    - callbacks will Fire 

const fs = require("fs");
fs.readFile("dele.txt", "utf-8", (err,data)=>{
    console.log(data);
});
console.log("this is a message");

