const http = require('http');

const hostname = '0.0.0.0';
const port = 8080;

function getFormat(value) {
    if (value.toLocaleString().length > 1) return value;
    return '0' + value.toLocaleString()
}

function calcTime(city, offset) {
    let d = new Date();
    let utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    let nd = new Date(utc + (3600000 * offset));
    return city + ": " +
        getFormat(nd.getHours()) + ':' +
        getFormat(nd.getMinutes()) + " " +
        getFormat(nd.getDay()) + '.' +
        getFormat(nd.getMonth()) + '; ';
}

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(
        calcTime('Lublin', '+1') +
        calcTime('New York', '-4') +
        calcTime('Sydney', '+11')
    );
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});