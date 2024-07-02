const mongoose = require('mongoose')

const mulherSchema = new mongoose.Schema({
    nome:{
        type:String,
        required: true
    },
    citacao:{
        type:String,
        required:true
    },
    Bio:{
        type:String,
        required: true
    }

})

module.exports = mongoose.model('diva',mulherSchema)