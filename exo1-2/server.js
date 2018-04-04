var http = require('http'); 
var pug = require('pug');

const compilation = pug.compileFile('index.pug');
let server = http.createServer();

server.on('request', (request, response) => {
    console.log('il y a eu une requête');
    response.write(pug.renderFile('index.pug', {
        name: 'Walid'
    }));
    response.end(compilation);
})

server.listen(3000);