const router = require('express').Router();
const Alert = require('../models/alert');

const getAllalerts = async (req,res) => {
    try {
        const alert = await Alert.find({});
        
        if(!alert)
        {
            return res.status(404).json({msg:"No alerts right now"})
        }

        res.status(200).json({data:alert});

    } catch (error) {

        console.log(error);
        
    }
}

const createAlert = async (req,res) => {
    try {
        const alert = await Alert.create(req.body);

        if(!alert)
        {
            return res.status(404).json({msg:"No alerts right now"})
        }

        res.status(201).json({data:alert});


    } catch (error) {
        console.log(error);
    }
};



router.get('/',getAllalerts);
router.post('/',createAlert);

module.exports = router;