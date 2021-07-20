var express = require('express');

var todoControllers = require('./controller/todoController');

var app = express();

//setting view engine
app.set('view engine' , 'ejs');

//setting external files
app.use('/public',express.static('public'));

//passing app varibale to todoController function
todoControllers(app);

//Listen to port
app.listen(3000 , function(){
    console.log("Listing to port 3000");
});