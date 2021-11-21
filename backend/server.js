import express from 'express';
import {guardar_productos} from './db.js';
import path from 'path';
import { calcularDepreciacionNIIF, calcularDepreciacionNIIFEnDolares } from './src.js';

let app = express();
let dir_backend = path.resolve();
let dir_frontend = path.join(dir_backend, '../frontend');

app.listen('5000', function (req,res) {
    console.log('server is running on port 5000');
});

app.use(express.static(dir_frontend));

app.get('/', function (req, res) {
    res.sendFile(dir_frontend + '/index.html');
});

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.post('/consultarDepreciacion',function(req,res){
    console.log("URL Funcionando");
    let {precio_inicial, precio_final, vida_util, periodos} = req.body;
    console.log(precio_inicial, precio_final, vida_util, periodos);
    guardar_productos(precio_inicial, precio_final, vida_util, periodos);
    let operacion = calcularDepreciacionNIIF(precio_inicial, precio_final, vida_util, periodos);
    let operacion_dolares = calcularDepreciacionNIIFEnDolares(precio_inicial, precio_final, vida_util, periodos);
    console.log(operacion);
    console.log(operacion_dolares);
    res.redirect('/');
    });