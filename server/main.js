/* eslint-disable no-console */
import express from 'express';
import open from 'open';
const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
const compress = require('compression');
const NODE_ENV = process.env.NODE_ENV || 'development';

const app = express();
app.use(compress());

// ------------------------------------
// Apply Webpack HMR Middleware
// ------------------------------------
if (NODE_ENV === 'development') {
  const compiler = webpack(webpackConfig);
  const port = 4000;

  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath  : webpackConfig.output.publicPath,
    contentBase : path.resolve(__dirname, 'src'),
    hot         : true,
    quiet       : false,
    noInfo      : false,
    lazy        : false,
    stats       : 'normal',
  }));
  app.use(require('webpack-hot-middleware')(compiler, {
    path: '/__webpack_hmr'
  }));

  // Serve static assets from ~/public since Webpack is unaware of
  // these files. This middleware doesn't need to be enabled outside
  // of development since this directory will be copied into ~/dist
  // when the application is compiled.
  app.use(express.static(path.resolve(__dirname, 'public')));

  // This rewrites all routes requests to the root /index.html file
  // (ignoring file requests). If you want to implement universal
  // rendering, you'll want to remove this middleware.
  app.use('*', function (req, res, next) {
    const filename = path.join(compiler.outputPath, 'index.html');
    compiler.outputFileSystem.readFile(filename, (err, result) => {
      if (err) {
        return next(err);
      }
      res.set('content-type', 'text/html');
      res.send(result);
      res.end();
    });
  });

  app.listen(port, function (err) {
    if (err) {
      console.error(err);
    } else {
      open(`http://localhost:${port}`);
    }
  });
}

if (NODE_ENV === 'production') {
  // assign a variable to the port number
  const port = 3000;
  // create an instance of express
  const app = express();

  // configure express to serve static files
  app.use(express.static('build/dist'));

  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../build/dist/index.html'));
  });

  app.listen(port, function (err) {
    if (err) {
      console.error(err);
    } else {
      open(`http://localhost:${port}`);
    }
  });
}

module.exports = app;
