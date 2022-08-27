//  blit in modules in Node.js
const fs = require("fs");
let text = fs.readFileSync("dele.txt", "utf-8");
text = text.replace("browser","kishan");

console.log("the content of the file is");
console.log(text);

console.log("creating a neww file....");
fs.writeFileSync("kishan.txt" , text);