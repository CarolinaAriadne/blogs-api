const express = require('express');
const router = require('./router');
const err = require('./middlewares/middlewareError');

// ...

const app = express();

app.use(express.json());

app.use(router);
app.use(err);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
