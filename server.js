// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));

// Spin up the server
const port = 8000;

// Callback to debug
const server = app.listen(port , listening);

// Initialize all route with a callback function
function listening(){
    console.log('server runnning');
    console.log(`server running on port : ${port}`);
}

// Callback function to complete GET '/all'
app.get('/all' , sendData)

function sendData(req,res){
    res.send(projectData);
    projectData = {};
}

// Post Route
app.post('/add' , addData);

function addData(req,res){
    console.log(req.body);
    newAddition = {
        data: req.body.data,
        tem: req.body.tem,
        content: req.body.content
    }
    projectData.push(newAddition);
}
  