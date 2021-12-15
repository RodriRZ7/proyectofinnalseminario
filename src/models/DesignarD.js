const {Schema, model} = require('mongoose');

const DesignarDSchema = new Schema({
       iddocente:{
            type: String,
            required: true
       },
       idmateria:{
             type: String,
             required: true
        },
        registro: {
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
module.exports = model('DesignarD', DesignarDSchema);