require('dotenv').config();

const express = require('express');
const connectDB = require('./db/connect');
const activity = require('./routes/activity');
const device = require('./routes/device');
const assembly = require('./routes/assembly');
const employee = require('./routes/employee');


const app = express();

PORT = process.env.PORT || 3000;

app.use(express.static('./public'))
app.use(express.json());



//routes

app.get('/',(req,res) => {
    res.send("Hello");
})

app.use('/api/v1/activity',activity);
app.use('/api/v1/device',device);
app.use('/api/v1/assembly',assembly);
app.use('/api/v1/employee',employee);
app.use('/api/v1/alert',require('./routes/alert'));



const start = async () => {
    try {

          await connectDB(process.env.MONGO_URI);
        app.listen(PORT,console.log(`Server is listening on port ${PORT}...`));
        console.log(process.env.MONGO_URI);
        
    } catch (error) {
        console.log(error);
    }
}

start();




