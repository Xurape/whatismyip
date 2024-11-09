const express = require('express');
const app = express();
const requestIp = require('request-ip');

app.use(requestIp.mw());

app.get('/', function(req, res) {
    const clientIp = req.clientIp;
    res.json({ ip: clientIp });
});

app.listen(3000, function() {
});
