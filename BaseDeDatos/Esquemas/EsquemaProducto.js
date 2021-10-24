const mongoose = require('../Esquemas/mongoose'),
    Schema = mongoose.Schema;

const schemas = {
    schemaProducts: new Schema({

        id: {type: String, required: true },
        precio: {type: Number, required: true },
        cantidad: {type: Number},
        fechaVenta: {type: String, required: true},
        documentoIdentificacion: {type: Number, required: true},
        Vendedor: {type: String, required: true}
    })
}
const productsModel = mongoose.model('products', schemaProducts);
module.exports = productsModel;