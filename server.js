const express = require('express');
const hbs = require('hbs');
var app = express();
//request: data you get from the client
//response: how you handle the incoming requests with the data available to you
hbs.registerPartials(__dirname+'/views/partials')

//app.set('key', 'value'); key is the value you want to set and value is the value you want to use
app.set('view engine','hbs');

app.use(express.static(__dirname+'/public'));//middleware
app.get('/',(req,res)=>{
  res.render('home.hbs',{
    pageTitle: 'Home Page',
    pageDesc: 'This is my Home page',
    copyright_year: new Date().getFullYear()
  });
});

app.get('/about', (req, res)=>{
//render function takes 2 arguments - the page to be displayed and and object having values to be passed into the page
  res.render('about.hbs',{
    pageTitle: 'About Us',
    pageDesc: 'This is my about us page',
    copyright_year: new Date().getFullYear()
  });
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
