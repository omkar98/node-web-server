const express = require('express');
const hbs = require('hbs');
var app = express();
//request: data you get from the client
//response: how you handle the incoming requests with the data available to you
//app.set('key', 'value'); key is the value you want to set and value is the value you want to use
app.set('view engine','hbs');

app.use(express.static(__dirname+'/public'));//middleware
app.get('/',(req,res)=>{
  // res.send('<h1>Hey Back Again!</h1>');
  res.send({
    name: 'Omkar',
    likes: ['programming','cricket'],
    xyz: 'MGM'
  });
});

app.get('/about', (req, res)=>{
  res.render('about.hbs');
});

// /bad res.send
//send back json data with errorMessage
app.get('/bad',(req,res)=>{
  res.send({
    status_code: 404,
    errorMessage: 'This is an error'
  });
});

app.listen(3000, ()=>{
  console.log('Server is ready to go!');
});//it binds our app to a port on our machine
