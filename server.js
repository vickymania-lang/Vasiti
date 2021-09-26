//const path = require('path');
const express = require('express');

const app = express();

const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')));

app.listen(6001, () => console.log('listening at 6001'));