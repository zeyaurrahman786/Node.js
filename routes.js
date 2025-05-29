// Route Handlers

const http = require("http");
const url = require("url");



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









// Handling Dynamic Routes

const server = http.createServer((req, res) => {
    const { pathname } = url.parse(req.url);
    if(pathname.startsWith('/products/')){
        const items = pathname.split('/')[2];  '/products/item1'
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(`Welcome to the Products Page! You are viewing: ${items}`);
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end("Page Not Found");
    }
})





server.listen(3000, () =>{
    console.log(`Server is running on http://localhost:3000`);
})