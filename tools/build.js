/*eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import colors from 'colors';

process.env.NODE_ENV = 'production'; // prevents hot reloading, which is unnecessary in production

//console message to show the build is in progress
console.log('Generating minified bundle for production using Webpack. This is take a while …');

//run webpack and show errors if they occur
webpack(webpackConfig).run((err, stats) => {
  if(err) {
    console.log(err);
    return 1;
  }

  const jsonStats = stats.toJson();

  if(jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(error));
  }

  if(jsonStats.hasWarnings) {
    console.log('Webpack generated the following warnings: ');
    jsonStats.warnings.map(warning => console.log(warning));
  }

console.log('webpack stats: ${stats}');

// console log that the build has succeeded
console.log('Build worked, code is in dist folder');

return 0;

});
