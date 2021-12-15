const {Schema, model} = require('mongoose');

const AulaSchema = new Schema({
       numerodeaula:{
            type: String,
            required: true
       },
       piso:{
             type: String,
             required: true
        },
        capacidadaula:{
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
module.exports = model('Aula', AulaSchema);