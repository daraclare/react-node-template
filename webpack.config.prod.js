import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production')
};

export default {
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json']
  },
  devtool: 'cheap-module-source-map', // Note: changing this reduced app build size
  entry: './src/index',
  target: 'web',
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
      noInfo: true // set to false to see a list of every file being bundled.
    }),
    new webpack.optimize.OccurenceOrderPlugin(), //optimises the order the files are bundled in for optimimal minification
    new webpack.DefinePlugin(GLOBALS), //defines variables that are made available to the libraries that webpack bundles, removes stuff like proptypes for production
    new ExtractTextPlugin('styles.css'), //extracts css and bundles it into a file called styles.css
    new webpack.optimize.UglifyJsPlugin() //minifies JavaScript
  ],
  module: {
    rules: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel-loader']},
      {test: /(\.css)$/, loader: ExtractTextPlugin.extract("css?sourceMap")},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'},
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
      {test: /\.(jpe?g|png|gif|svg)$/i, loaders: [ 'file?hash=sha512&digest=hex&name=[hash].[ext]',
        'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false']},
      {test: /\.js|.jsx?$/, exclude: /(node_modules|bower_components)/, loader: 'babel-loader'},
      {test: /\.svg$/, loader: 'babel!svg-react'}
      ]
    }
  };
