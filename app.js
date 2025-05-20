const fs = require("fs");
const http = require("http");
const path = require("path");
const os = require("os");
const url = require("url");
const crypto = require("crypto");
const sayHello = require("./greeting");
const math = require("./math");




// Read a file using fs.readFile

// fs.readFile("document.txt", "utf-8", (err, data) => {
//     if(err){
//         console.error("Error reading file:", err)
//         return;  
//     }
//     console.log(data);
// })





// Write a file using fs.writeFile

// const content = "Hello, this is a new file created using Node.js!";
// fs.writeFile("output.txt", content, (err) => {
//     if(err){
//         console.error("Error writing file:", err);
//         return;
//     }
//     console.log("File written successfully!");
// })




// Append to a file using fs.appendFile

// const appendContent = "\nThis is appended content.";
// fs.appendFile("output.txt", appendContent, (err) => {
//     if(err){
//         console.error("Error appending to file:", err);
//         return;
//     }
//     console.log("Content appended successfully!");
// })






// Rename a file using fs.rename

// fs.rename("document.txt", "example.txt", (err) => {
//     if(err){
//         console.error("Error renaming file:", err);
//         return;
//     }
//     console.log("File renamed successfully!");
// })






// Delete a file using fs.unlink

// fs.unlink("output.txt", (err) => {
//     if(err){ 
//         console.error("Error deleting file:", err);
//         return;  
//     }
//     console.log("File deleted successfully!");
// })






// Create a server using http module

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/plain");
//     res.end("Hello, Developers!");
// });

// server.listen(8080, () => {
//     console.log("Server running at http://localhost:8080/");
// });






// Join paths using path.json

// const directory = "/user/local"
// const fileName = "example.txt"
// const filePath = path.join(directory, fileName);
// console.log("File Path: ", filePath);






// Get OS information using os module

// console.log("Os Type : ", os.type());
// console.log("Platform : ", os.platform());
// console.log("CPU Architecture : ", os.arch());
// console.log("Total Memory : ", os.totalmem());
// console.log("Free Memory : ", os.freemem());





// Parse URL using url module

// const myURL = new URL('https://example.com:8080/path/name?query=hello#john');
// console.log('Host : ', myURL.host);
// console.log('PathName : ', myURL.pathname);
// console.log('Search Params : ', myURL.searchParams.get('query'));
// console.log('Hash : ', myURL.hash);






// Generate a hash using crypto module

// const hash = crypto.createHash('sha256');
// hash.update("Zeyaur8581@");
// console.log("Hash : ", hash.digest('hex'));





// Custom module

// const message = sayHello("Kushagra");
// console.log(message);





// Custom multiple modules

console.log(math.add(10, 5));
console.log(math.subtract(10, 5));