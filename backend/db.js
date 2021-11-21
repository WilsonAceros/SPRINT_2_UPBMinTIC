import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/depreciacion', {})
.then(()=> console.log("Conexion a MongoDB"))
.catch((error) => console.log("Error: " + error))

let productos_esquema = new mongoose.Schema({
    Precio_inicial: Number,
    Precio_final: Number,
    Vida_util: Number,
    Periodos: Number
},{versionKey: false});

let productos_modelo = mongoose.model('productos', productos_esquema);

let guardar_productos = async (precio_inicial,precio_final,vida_util,periodos) => {
    let documentos = new productos_modelo(
        {
            Precio_inicial: precio_inicial,
            Precio_final: precio_final,
            Vida_util: vida_util,
            Periodos: periodos
        });
    await documentos.save();
}

// guardar_productos();

export{guardar_productos};