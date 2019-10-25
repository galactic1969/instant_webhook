const ngrok = require('ngrok');
const express = require('express');

require('dotenv').config();
const app = express();

app.get('/', (req, res) => {
    res.send('ok');
    outputLog(req);
});

app.post('/', (req, res) => {
    res.send('ok');
    outputLog(req);
});

const server = app.listen(process.env.EXPRESS_PORT, async () => {
    const port = server.address().port;
    const url = await ngrok.connect({port: port});

    console.log(`listening at ${url} -> http://localhost:${port}`);
});

const outputLog = (req) => {
    console.log('===============================================');
    console.log('                   NEW REQUEST                 ');
    console.log('==== PATH ====');
    console.log(`${req.method} ${req.path}`);

    console.log('==== HEADERS ====');
    console.log(req.headers);

    console.log('==== QUERY ====');
    console.log(req.query);

    console.log('==== PARAMS ====');
    console.log(req.params);

    console.log('==== BODY ====');
    console.log(req.body);
};
