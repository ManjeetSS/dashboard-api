const router = require('express').Router();
const Employee = require('../models/employee');

const getAllEmployees = async (req,res)=> {
    try {
        const employee = await Employee.find(req.query);
        
        if(!employee)
        {
            return res.status(404).json({msg:"No employees  found"});

        }

        res.status(200).json({data:employee});

    } catch (error) {

        console.log(error);
        
    }
}

const createEmployee = async (req,res)=> {
    try {

        //console.log(req.body);
        //res.send("hello");
        
        const employee = await Employee.create(req.body);

        if(!employee)
        {
            return res.status(404).json({mgs:"No record returned"});
        }


        res.status(201).json({employee});

    } catch (error) {

        console.log(error);
        
    }
}

router.get('/',getAllEmployees);
router.post('/',createEmployee);

module.exports = router;