//http://coenraets.org/blog/2012/10/creating-a-rest-api-using-node-js-express-and-mongodb/

var express = require('express'),
endpoints = require('./server/routes/endpoints');
var app = express();



app.configure(function(){
    app.use(express.static(__dirname + '/public'));
});


app.get('/', function(req, res){
	res.sendfile(__dirname + '/public/index.html');
});
app.get('/endpoints', endpoints.findAll);
app.get('/endpoints/:id', endpoints.findById);

app.listen(3000);
console.log('Listening on port 3000...');


