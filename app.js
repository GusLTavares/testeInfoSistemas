const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser')
const rotaVeiculos = require('./routes/veiculos');
const cors = require('cors');


app.use(cors());
app.use(morgan('dev'));
//only single data
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/veiculos', rotaVeiculos);

app.use((req, res, next) => 
{
    const erro = new Error('Não Encontrado');
    erro.status = 404;
    next(erro);
});



module.exports = app;