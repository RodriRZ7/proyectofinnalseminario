const {Schema, model} = require('mongoose');

const DocenteSchema = new Schema({
       nombre:{
            type: String,
            required: true
       },
       apellido:{
             type: String,
             required: true
        },
        ci:{
             type: Number,
             required: true
         },
         cargahorariasemanal:{
            type: String,
            required: true
        },
        id:{
            type: Number,
            required: true
        },
        user: {
            type: String,
            required: true
        }
},      {
    timestamps: true
})
module.exports = model('Docente', DocenteSchema);