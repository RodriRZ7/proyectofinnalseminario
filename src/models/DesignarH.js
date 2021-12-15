const {Schema, model} = require('mongoose');

const DesignarHSchema = new Schema({
       iddocente:{
            type: String,
            required: true
       },
       idmateria:{
             type: String,
             required: true
        },
        idaula:{
             type: Number,
             required: true
        },
        idsalazoom:{
            type: String,
            required: true
        },
        dia1:{
            type: String,
            required: true
        },
        dia2: {
            type: String,
            required: true
        },
        hora1: {
            type: String,
            required: true
        },
        hora2: {
            type: String,
            required: true
        },
        user: {
            type: String,
            required: true
        }
},      {
    timestamps: true
})
module.exports = model('DesignarH', DesignarHSchema);