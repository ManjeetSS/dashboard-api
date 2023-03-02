const mongoose = require('mongoose');

const AssemblySchema = new mongoose.Schema({
    name:{
        type:String
    },

    assembly_no : {
        type:Number
    },

    device: [
        {

            dname: String,
            temperature: Number,
            effectiveness:Number,

        }
        

    ],
    
});



module.exports = mongoose.model('Assembly',AssemblySchema);