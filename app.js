const fs = require("fs");
const http = require("http");
const path = require("path");
const os = require("os");
const url = require("url");
const crypto = require("crypto");
const syaHello = require("./greeting");
const math = require("./math");
const lodash = require("lodash");




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




// Delete a file using fs.unlink

// fs.unlink("output.txt", (err) => {
//     if(err){ 
//         console.error("Error deleting file:", err);
//         return;  
//     }
//     console.log("File deleted successfully!");
// })




// Rename a file using fs.rename

// fs.rename("document.txt", "renamed_document.txt", (err) => {
//     if(err){
//         console.error("Error renaming file:", err);
//         return;
//     }
//     console.log("File renamed successfully!");
// })






// Create a server using http module

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/plain");
//     res.end("Hello, World!");
// }); 

// server.listen(3000, () => {
//     console.log("Server running at http://localhost:3000/");
// });






// Join paths using path.join

// const directory = '/user/local'
// const fileName = 'document.txt'
// const filePath = path.join(directory, fileName);
// console.log("File Path:", filePath);





// Get OS information using os module

// console.log('OS Type:', os.type());
// console.log('Platform:', os.platform());
// console.log('CPU Architecture:', os.arch());
// console.log('Total Memory:', os.totalmem());
// console.log('Free Memory:', os.freemem());





// Parse URL using url module

// const myURL = new URL('https://example.com:8080/path/name?query=hello#john');
// console.log('Host:', myURL.host);
// console.log('Pathname:', myURL.pathname);
// console.log('Search Params:', myURL.searchParams.get('query'));
// console.log('Hash:', myURL.hash);





// Generate a hash using crypto module

// const hash = crypto.createHash('sha256');
// hash.update('Zeyaur12@');
// console.log('Hash:', hash.digest('hex'));





// Custom module

// const message = syaHello("Developers");
// console.log(message);





// Custom multiple modules

// console.log(math.add(10, 5));
// console.log(math.subtract(10, 5));




// Uses of NPM 

// npm init -y (Download package.json file)
// npm i 
// npm install lodash (Install lodash package)

// const array = [1, 2, 3, 4, 5, 6];
// console.log("Original Array : ", array);

// const reversed = lodash.reverse(array)
// console.log("Reversed Array : ", reversed);






// Working with Directories (Folder) :-

// Creating a Directory using mkdir()

// fs.mkdir('firstFolder', (error) => {
//     if(error){
//         console.error("Error while creating Directory : ", error);
//         return;
//     }
//     console.log("Directory Created Successfully!");
// })



// // Creating a Directory using mkdirSync()

// fs.mkdirSync("secondFolder")
// console.log("Directory Created Successfully!");






// Reading a Directory using readdir()

// fs.readdir('./', (error, files) => {
//     if(error){
//         console.error('Error reading Directory : ', error);
//         return;
//     }
//     console.log("Directory Content", files);
// })




// Reading a Directory using readdirSync()

// const files = fs.readdirSync("./")
// console.log("Directory Content", files);





// Checking if a Directory exists using existsSync()

// const dirName = "secondFolder";
// if(fs.existsSync(dirName)){
//     console.log("Directory exists.");
// }
// else{
//     console.log("Directory does not exist.");
// }





// Deleting a Directory using rmdir()

// fs.rmdir('firstFolder', (error) => {
//     if(error){   
//         console.error("Error while deleting Directory : ", error);
//         return;
//     }
//     console.log("Directory Deleted Successfully!");
// })



// // Deleting a Directory using rmdirSync()
// fs.rmdirSync('newDirectory2');
// console.log("Directory Deleted Successfully!");




// Deleting a Directory using fs.rm() (Node.js v12.10.0 and later)

// fs.rm('firstFolder', {recursive: true}, (error) => {
//     if(error){   
//         console.error("Error while deleting Directory : ", error);
//         return;
//     }
//     console.log("Directory Deleted Successfully!");
// })






// Renaming a Directory using fs.rename()

// fs.rename('folder2', 'folder5', (error) => {
//     if(error){
//         console.error("Error while renaming Directory : ", error);
//         return;
//     }
//     console.log("Directory Renamed Successfully!");
// })


// Renaming a Directory using fs.renameSync()
// fs.renameSync('folder1', 'folder2');
// console.log("Directory Renamed Successfully!");





// Getting Directory Information using fs.stat()

// fs.stat('folder5', (error, stats) => {
//     if(error){
//         console.error("Error while getting Directory information : ", error);
//         return;
//     }
//     console.log("Directory Information: ", stats);
//     console.log("Is Directory:", stats.isDirectory());
// });







// Watching a Directory for changes using fs.watch()

// fs.watch('./', (eventType, filename) => {
//     if(filename){
//         console.log(`File changed: ${filename}, Event Type: ${eventType}`);
//     } else {
//         console.log('Filename not provided');
//     }
// });

// console.log("Watching for changes in the current directory...");