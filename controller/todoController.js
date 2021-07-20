var bodyParser = require('body-parser');

var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://test:test@cluster0-ac2cb.mongodb.net/test?retryWrites=true&w=majority', 
{ useNewUrlParser: true,
  useUnifiedTopology: true 
}
  
  );

var schemas = new mongoose.Schema({
    iteam : String
});

var Todos = mongoose.model('register' , schemas);

var iteamOne = Todos({iteam : 'raju'}).save(function(err){
    if(err) throw err;

    console.log('iteam saved');
})

var urlencodedParser = bodyParser.urlencoded({ extended: false });

var data = [{ iteam: "ramsai" }, { iteam: "rajs"}];

module.exports = function(app){

    

    app.get('/todo',function(req,res){
        res.render('todo' , {todos : data});
    })

    app.post('/todo', urlencodedParser, function (req, res) {
        data.push(req.body);
        res.json(data);
        window.location.reload(true);
    })

    app.delete('/todo', function (req, res) {

    })

    

}

