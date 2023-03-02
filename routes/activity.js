const router = require('express').Router();
const Activity = require('../models/activity');

const getAllActivities = async (req,res)=> {
    try {
        const activity = await Activity.find(req.query);
        
        if(!activity)
        {
            return res.status(404).json({msg:"No activities are found"});

        }

        res.status(200).json({data:activity});

    } catch (error) {

        console.log(error);
        
    }
}

const createActivity = async (req,res)=> {
    try {

        //console.log(req.body);
        //res.send("hello");
        
        const activity = await Activity.create(req.body);

        if(!activity)
        {
            return res.status(404).json({mgs:"No record returned"});
        }


        res.status(201).json({activity});

    } catch (error) {

        console.log(error);
        
    }
}

const getActivity = async (req,res) =>{
    
    try {

        const {state} = req.params;
        console.log(req.params);



        const newActivity = await Activity.find({state:state})
        .sort('-duration');

        if(!newActivity)
        {
            res.status(404).json({msg:"No activity found"});
        }

        res.status(200).json({data:newActivity});
        
    } catch (error) {
        console.log(error);
    }

}

const updateActivity = async (req,res) => {
    try {

        const {id:activityId} = req.params;
        console.log(req.body);
        const activity = await Activity.findOneAndUpdate({_id:activityId},req.body,{
            new:true,
            runValidators:true,
        });

        if(!activity)
        {
            res.status(404).json({msg:"No activity with this id"});
        }

        res.status(200).json({activity});
        
    } catch (error) {
        console.log(error);
    }
}

const deleteActivity = async(req,res) => {
    try {

        const {id: activityId} = req.params;
        const activity = await Activity.findOneAndDelete({_id: activityId});
        

        if(!activity)
        {
           return res.status(404).json({msg:`No activity by this id ${activityId}`});
        }
        res.status(200).json({activity});
        
    } catch (error) {
        res.status(500).json(error);
        
    }
}


router.get('/',getAllActivities);
router.post('/',createActivity);
router.get('/:state',getActivity)
router.put('/:id',updateActivity);
router.delete('/:id',deleteActivity);

module.exports = router;