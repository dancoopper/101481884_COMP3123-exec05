const express = require('express');
const data = require('../user.json')
const routerUser = express.Router();

/*
- Return all details from user.json file to client as JSON format
*/
routerUser.get('/profile', (req,res) => {
    res.header("Content-Type",'application/json');
    res.send(JSON.stringify(data));
});



/*
- Modify /login router to accept username and password as JSON body parameter
- Read data from user.json file
- If username and  passsword is valid then send resonse as below 
    {
        status: true,
        message: "User Is valid"
    }
- If username is invalid then send response as below 
    {
        status: false,
        message: "User Name is invalid"
    }
- If passsword is invalid then send response as below 
    {
        status: false,
        message: "Password is invalid"
    }
*/
routerUser.post('/login', (req,res) => {
    console.log(req.body)
    if(req.body.username === data.username && req.body.password === data.password){
        res.json({
            status: true,
            message: "User Is valid"
        })
    }
    else if(req.body.username !== data.username){
        res.json({
            status: false,
            message: "User Name is invalid"
            })
    }else if(req.body.password !== data.password){
     res.json({
        status: false,
        message: "Password is invalid"
    })
    }
   
});

/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
*/
routerUser.get("/logout/:username", (req, res) => {
  res.send(`<b>${req.params.username} successfully logged out.</b>`);
});

module.exports = routerUser;