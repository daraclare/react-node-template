//implementing express web server
import express from 'express';
import path from 'path';
import open from 'open';

/* eslint-disable no-console */

//assign a variable to the port number
const port = 4000;
//create an instance of express
const app = express();

//configure express to serve static files
app.use(express.static('build/dist'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../build/dist/index.html'));
});

app.listen(port, function(err) {
  if(err) {
    console.error(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
