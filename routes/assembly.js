const router = require('express').Router();
const Assembly = require('../models/assembly-line');

const getAllAssemblies = async (req,res)=> {
    try {
        const assembly = await Assembly.find(req.query);
        
        if(!assembly)
        {
            return res.status(404).json({msg:"No assemblies are found"});

        }

        res.status(200).json({data:assembly});

    } catch (error) {

        console.log(error);
        
    }
}

const createAssembly = async (req,res)=> {
    try {

        //console.log(req.body);
        //res.send("hello");
        
        const assembly = await Assembly.create(req.body);

        if(!assembly)
        {
            return res.status(404).json({mgs:"No record returned"});
        }


        res.status(201).json({assembly});

    } catch (error) {

        console.log(error);
        
    }
}

/*const getActivity = async (req,res) =>{
    
    try {

        const {id:activityId} = req.params;
        console.log(req.params);

        const newActivity = await Activity.findOne({_id:activityId});

        if(!newActivity)
        {
            res.status(404).json({msg:"No activity found"});
        }

        res.status(200).json({newActivity});
        
    } catch (error) {
        console.log(error);
    }

}
*/
const updateAssembly = async (req,res) => {
    try {

        const {line_no} = req.params;
        console.log(typeof(line_no));
      //  console.log(req.body);
        const assembly = await Assembly.findOne({assembly_no:2});
        
        console.log(req.body);

        assembly.device.push(req.body);

        const newAssembly = await Assembly.replaceOne({assembly_no:assembly.assembly_no},assembly);

        if(!newAssembly)
        {
            res.status(404).json({msg:"No assembly line"});
        }

        res.status(200).json({newAssembly});
        
    } catch (error) {
        console.log(error);
    }
}

/*const deleteActivity = async(req,res) => {
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
}*/


router.get('/',getAllAssemblies);
router.post('/',createAssembly);
//router.get('/:id',getActivity)
router.put('/:line',updateAssembly);
//router.delete('/:id',deleteActivity);

module.exports = router;