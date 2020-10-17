const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
//Puertos
app.set('port', process.env.PORT || 3000);

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
 
//Rutas
app.use('/api/employees',require('./router/employess.routes'));

module.exports = app;