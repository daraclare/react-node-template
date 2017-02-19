//implementing express web server
import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';

/* eslint-disable no-console */

const port = 3000;
//create an instance of express
const app = express();
const compiler = webpack(config);

//configure express
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true, //no info on the command line
  publicPath: config.output.publicPath
}));
//use webpack hot middleware
app.use(require('webpack-hot-middleware')(compiler));

// serve index.html for all requests
app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

//start up express on port 3000
app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
