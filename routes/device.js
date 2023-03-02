const router = require('express').Router();
const Device = require('../models/device');

const getAllDevices = async (req,res)=> {
   // console.log(req.query);
    try {
        const device = await Device.find(req.query)
        .sort('-temperature');
        
        if(!device)
        {
            return res.status(404).json({msg:"No devices are found"});

        }

        res.status(500).json({data:device});

    } catch (error) {

        console.log(error);
        
    }
}

const createDevice = async (req,res) =>{
    try {
       
        //console.log(req.body);
       
        const device = await Device.create(req.body);
        
        if(!device)
        {
            return res.status(404).json({msg:"No devices are found"});

        }

        res.status(200).json({data:device});
        
       
    } catch (error) {

        console.log(error);
        
    }
}

const getDevice = async (req,res) => {
    try {
        console.log(req.params);
        const {id:deviceId} = req.params;
       // const {temp,name} = req.params;
        const device = await Device.findOne({_id:deviceId}); 
        
        if(!device)
        {
            res.status(404).json({msg:"Device Not found"});
        }

        res.status(200).json({data:device});

    } catch (error) {
        console.log(error);
    }
}

const updateDevice = async (req,res) => {
    try {

        const {id:deviceId} = req.params;
        
        const {name,temperature} = req.body;
        

        const device = await Device.findOneAndUpdate({_id:deviceId},{name:name,temperature:temperature},{
            new:true,
            runValidators:true,
        });

        if(!device)
        {
            res.status(404).json({msg:"No device with this id"});
        }

        res.status(200).json({device});
        
    } catch (error) {
        console.log(error);
    }
}

const deleteDevice = async(req,res) => {
    
    try {

        const {id: deviceId} = req.params;
        const device = await Device.findOneAndDelete({_id: deviceId});
        

        if(!device)
        {
           return res.status(404).json({msg:`No device by this id ${deviceId}`});
        }
        res.status(200).json({device});
        
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
        
        
    }
}

router.get('/',getAllDevices);
router.post('/',createDevice);
router.get('/:id',getDevice);
router.put('/:id',updateDevice);
router.delete('/:id',deleteDevice);

module.exports = router;