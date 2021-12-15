const {Schema, model} = require('mongoose');

const MateriaSchema = new Schema({
       nombre:{
            type: String,
            required: true
       },
       sigla:{
             type: String,
             required: true
        },
        horasporsemana:{
             type: String,
             required: true
         },
         cargahoraria:{
            type: String,
            required: true
        },
         semestre:{
            type: Number,
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
module.exports = model('Materia', MateriaSchema);