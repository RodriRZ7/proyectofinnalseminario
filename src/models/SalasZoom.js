const {Schema, model} = require('mongoose');

const SalasZoomSchema = new Schema({
        sigla:{
            type: String,
            required: true
        },
       iddesala:{
            type: String,
            required: true
       },
       contraseña:{
             type: String,
             required: true
        },
        linkdesala:{
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
module.exports = model('SalasZoom', SalasZoomSchema);