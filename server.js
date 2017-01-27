/**
 * Created by areshytko on 27.01.17.
 */

var express = require('express');
var path = require('path');

var app = express();

// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, 'public')));

// send all requests to index.html so browserHistory in React Router works
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
});

var PORT = process.env.PORT || 8080;
app.listen(PORT, function() {
    console.log('Production Express server running at localhost:' + PORT)
});