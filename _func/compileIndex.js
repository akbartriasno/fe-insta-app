require('dotenv').config();

const fs = require('fs');
const args = process.argv.slice(2);

let env = args[0] || process.env.NODE_ENV.toLowerCase()

// Server
let API_AUTH = 'https://backend.api/';
let API_CORE = 'https://backend.api/';
let TITLE = 'Insta App';
let ROOT = '/';

let now = new Date().getTime();
let imgFolder = '/img';
let jsApp = '/js/insta-webapp.js';
let styles = '/css/insta-styles.css';
//let tailwindStyles = '/css/remoteflow-styles.css';

switch (env) {
    case 'production':
        break;

    case 'uat':
        break;

    case 'development':
        API_AUTH = process.env.REACT_APP_API_AUTH;
        API_CORE = process.env.REACT_APP_API_CORE;
        break;

    default:
    break;
}

fs.readFile(__dirname + '/../_static/index.html', (err, data) => {
    if (err) {
        throw err
    }

    let index = data.toString();
    let compiled = eval('`' + index + '`');

    fs.writeFile(__dirname + '/../public/index.html', compiled, function (err, data) {
        if (err) {
            return console.error(err);
        }
    });

})
