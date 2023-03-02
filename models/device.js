const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true,'Must be provided']
        
    },
    temperature:{
        type:Number,
        required: [true,'Must be provided']
        
    }

});

module.exports = mongoose.model('Device',deviceSchema);

