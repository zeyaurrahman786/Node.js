// Handling HTTP Requests and Responses

const http = require('http');
const url = require('url');


// GET Request

// const server = http.createServer((req, res) => {
//     if(req.method === 'GET' && req.url === '/'){
//         res.writeHead(200, {'Content-Type': 'text/plain'});
//         res.end('Welcome to the Home Page!'); // Respond with a welcome message
//     }else {
//         res.writeHead(404, {'Content-Type': 'text/plain'});
//         res.end('Page Not Found'); // Handle other routes
//     }
// });




// POST Request

// const server = http.createServer((req, res) => {
//     if(req.method === 'POST' && req.url === '/submit'){
//         let body = '';
//         req.on('data', chunk => {
//             body += chunk.toString(); // Convert Buffer to string
//         });
//         req.on('end', () => {
//             res.writeHead(200, {'Content-Type': 'application/json'});
//             res.end(JSON.stringify({message: "Data Received", data: body})); // Respond with the received data
//         });
//     }else {
//         res.writeHead(404, {'Content-Type': 'text/plain'});
//         res.end('Data Not Found'); // Handle other routes
//     }
// });






// Query Parameters

const server = http.createServer((req, res) => {
    if(req.method === "GET" && req.url.startsWith("/search")){
        const queryObject = url.parse(req.url, true).query;
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({message: "Query received", query: queryObject}));
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Route Not Found'); // Handle other routes~
    }
});



const PORT = 3060;

server.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`);
})