// Route Handlers

const http = require("http");
const url = require("url");
const queryString = require("querystring");



// Handling Multiple Routes

// const routes = {
//     '/': (req, res) => {
//         res.writeHead(200, {'Content-Type': 'text/plain'});
//         res.end("Welcome to the Home Page!");
//     },
//     '/about': (req, res) => {
//         res.writeHead(200, {'Content-Type': 'text/plain'});
//         res.end("Welcome to the About Page!");
//     },
//     '/contact': (req, res) => {
//         res.writeHead(200, {'Content-Type': 'text/plain'});
//         res.end("Welcome to the Contact Page!");
//     },
//     '/blogs': (req, res) => {
//         res.writeHead(200, {'Content-Type': 'text/plain'});
//         res.end("Welcome to the Blogs Page!");
//     },
//     '/notfound': (req, res) => {
//         res.writeHead(404, {'Content-Type': 'text/plain'});
//         res.end("Page Not Found");
//     }
// }

// const server = http.createServer((req, res) => {
//     const { pathname } = url.parse(req.url);
//     if(routes[pathname]) {
//         routes[pathname](req, res);
//     } else {
//         routes['/notfound'](req, res);
//     }
// });









// Handling Dynamic Routes(website.com/products/items1)

// const server = http.createServer((req, res) => {
//     const { pathname } = url.parse(req.url);
//     if(pathname.startsWith('/products/')){
//         const items = pathname.split('/')[2];
//         res.writeHead(200, {'Content-Type': 'text/plain'});
//         res.end(`Welcome to the Products Page! You are viewing: ${items}`);
//     } else {
//         res.writeHead(404, {'Content-Type': 'text/plain'});
//         res.end("Page Not Found");
//     }
// })







// Middleware Function for Logging Requests

// const requestLogger = (req, res, next) => {
//     console.log(`${req.method} request for '${req.url}'`);
//     next(req, res);
// }


// Creating the Server with Middleware

// const server = http.createServer((req, res) => {
//     requestLogger(req, res, () => {
//         const { pathname } = url.parse(req.url);
//     if(pathname.startsWith('/user/')) {
//         const userId = pathname.split('/')[2];
//         res.writeHead(200, { "Content-Type": "text/plain" });
//         res.end(`User Id: ${userId}`);
//     } else {
//         res.writeHead(404, { "Content-Type": "text/plain" });
//         res.end("Page Not Found");
//     }
//     });
// });







// Handling URL-encoded Data (Form Submission)

const server = http.createServer((req, res) => {
    if(req.method === 'POST' && req.url === '/submit') {
        let data = '';

        req.on('data', chunk => {
            data += chunk;
        });

        req.on('end', () => {
            const parsedData = queryString.parse(data);
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({message: "Form submitted successfully!", parsedData}));
        });
        
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Page Not Found");
    }
});




server.listen(3000, () =>{
    console.log(`Server is running on http://localhost:3000`);
})