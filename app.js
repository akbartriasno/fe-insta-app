var connect = require('connect');
const fs = require('fs');
var serveStatic = require('serve-static');
const serve = serveStatic(__dirname + '/public');

connect()
    .use((req,res,next) => {
        serve(req, res, () => {
            res.writeHead(200, { 'content-type': 'text/html' });
            fs.createReadStream(__dirname + '/public/index.html').pipe(res);
        });
    })
    .listen(process.env.PORT || 3030, () => console.log('Server running on 3030...'));
