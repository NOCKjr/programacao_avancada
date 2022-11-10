// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

const fs = require('fs')

console.log('Primeiro comando')

fs.readFile('./text.txt', callback)

function callback(err, content){
    if(err) return console.error('erro')
    console.log(String(content))
}

console.log('Segundo comando')
console.log('Terceiro comando')

// utilizando programação assíncrona

setTimeout(() => console.log('testando a função'), 3000)

console.log('comando que esta após setTimeOut')