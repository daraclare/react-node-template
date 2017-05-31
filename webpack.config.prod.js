import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json']
  },
  devtool: 'source-map',
  entry: {
    vendor: path.resolve(__dirname, 'src/vendor'),
    main: path.resolve(__dirname, 'src/index')
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'build/dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },
  plugins: [

    new webpack.HashedModuleIdsPlugin(),

    // for compatibility with old loaders, loaders can be switched to minimize mode via plugin
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
      noInfo: false
    }),

    // Extract text from bundle into a file
    new ExtractTextPlugin({
      filename: '[name]-[contenthash].css',
      disable: false,
      allChunks: true
    }),

    // Create separately cached bundle of vendor libraries.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    }),

    // Remove minifed error
    new webpack.DefinePlugin({
      "process.env": {
       NODE_ENV: JSON.stringify("production")
       }
    }),

    // Simplifies creation of HTML files to serve webpack bundles
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true
    }),

    // Plugin to replace a standard webpack chunkhash with md5
    new WebpackMd5Hash(),

    // Minify JS
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']},
      {test: /\.css$/, loader: ExtractTextPlugin.extract('css-loader?sourceMap')},
      {test: /\.(jpe?g|png|gif|svg)$/i, use: [ 'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
        'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false']},
    ]
  }
};
