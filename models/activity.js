const mongoose = require('mongoose');

const ActivitySchema = new mongoose.Schema({
    description: {
        type:String,
        required:[true,'Must be provided'],
    },

    area:{
        type:String,
        required:[true,'Must be provided'],
    },
    
    startTime:{
        type:Date,
        default:Date.now(),
    },

    duration: {
        type: Number,
        default:20,
    },

    setpoint:{
        type:Number,
        default:230
    },

    status:{
        type:String
    }
    ,

    asset:{
        type:String,
        default:"Haul Off",
    },

    state:{
        type:String,
        default:"Active",
    }
,
});

module.exports = mongoose.model('Activity',ActivitySchema);

