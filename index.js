const express = require('express');
const app = express();
const userRouter = require('./routes/users');

// Add User Router
app.use(express.json());

app.use('/api/v1/user', userRouter);

/*
- Create new html file name home.html 
- add <h1> tag with message "Welcome to ExpressJs Tutorial"
- Return home.html page to client
*/
app.get('/home', (req,res) => {
    res.sendFile(__dirname+'/public/home.html')
});



/*
Add error handling middleware to handle below error
- Return 500 page with message "Server Error"
*/
app.use((err,req,res,next) => {
  res.send('This is error router');
});

app.listen(process.env.port || 3000);

console.log('Web Server is listening at port '+ (process.env.port || 3000));