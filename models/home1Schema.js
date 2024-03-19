const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const user2Schema = new Schema({
    name:{
        type:String,
        required:true
    },
    number:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    complainbox:{
        type:String,
        required:true

    }
    
})
module.exports = mongoose.model('Studentsdata2',user2Schema)
