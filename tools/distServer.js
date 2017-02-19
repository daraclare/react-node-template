//implementing express web server
import express from 'express';
import path from 'path';
import open from 'open';

/* eslint-disable no-console */

//assign a variable to the port number
const port = 3000;
//create an instance of express
const app = express();

//configure express to serve static files
app.use(express.static('dist'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, function(err) {
  if(err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
