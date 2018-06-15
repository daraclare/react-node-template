import webpack from "webpack";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import UglifyJSPlugin from "uglifyjs-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const DEVELOPMENT = process.env.NODE_ENV === "development";
const PRODUCTION = process.env.NODE_ENV === "production";
const mode = DEVELOPMENT ? "development" : "production";

let entry = PRODUCTION
  ? {
      index: path.resolve(__dirname, "src/index")
    }
  : [
      "eventsource-polyfill", // necessary for hot reloading with IE
      "webpack-hot-middleware/client?reload=true", //note that it reloads the page if hot module reloading fails.
      path.resolve(__dirname, "src/index")
    ];

let devtool = PRODUCTION ? "source-map" : "cheap-module-eval-source-map";

let output = DEVELOPMENT
  ? {
      path: __dirname + "/dist", // Note: Physical files are only output by the production build task `npm run build`.
      publicPath: "/",
      filename: "scripts.js"
    }
  : {
      path: path.resolve(__dirname, "dist"),
      publicPath: "/",
      filename: "[name].[chunkhash].js"
    };

let plugins = DEVELOPMENT
  ? [
      new webpack.LoaderOptionsPlugin({
        minimize: false,
        debug: true,
        noInfo: true // set to false to see a list of every file being bundled.
      }),
      new webpack.HotModuleReplacementPlugin() //for hot reloading
    ]
  : [
      new webpack.HashedModuleIdsPlugin(),

      // for compatibility with old loaders, loaders can be switched to minimize mode via plugin
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
        noInfo: false
      }),

      // Extract text from bundle into a file
      new MiniCssExtractPlugin({
        filename: "[name].[chunkhash].css",
        chunkFilename: "[id].css"
      }),

      // Simplifies creation of HTML files to serve webpack bundles
      new HtmlWebpackPlugin({
        template: "build/index-template.html",
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
      })
    ];

plugins.push(
  new webpack.DefinePlugin({
    DEVELOPMENT: JSON.stringify(DEVELOPMENT),
    PRODUCTION: JSON.stringify(PRODUCTION),
    "process.env": {
      NODE_ENV: JSON.stringify(PRODUCTION ? "production" : "development")
    }
  })
);

let cssLoaders = PRODUCTION
  ? [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
  : ["style-loader", "css-loader", "sass-loader"];

export default {
  resolve: {
    extensions: ["*", ".js", ".jsx", ".json"],
    modules: [path.resolve(__dirname, "./src"), "node_modules"]
  },
  mode: mode,
  context: __dirname,
  devtool: devtool,
  entry: entry,
  target: "web",
  output: output,
  plugins: plugins,
  optimization: {
    splitChunks: {
      // replaces CommonsChunkPlugin()
      name: "vendor",
      minChunks: Infinity
    },
    noEmitOnErrors: true, // NoEmitOnErrorsPlugin
    // concatenateModules: true, //ModuleConcatenationPlugin
    minimizer: [
      // Minify JS and allow tree shaking
      new UglifyJSPlugin({
        uglifyOptions: {
          output: {
            comments: false
          },
          compress: true
        }
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: cssLoaders,
        exclude: "/node_modules/"
      },
      {
        test: /\.jsx?$/, // loads both js and jsx files
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: "file-loader"
      },
      {
        test: /\.(woff|woff2)$/,
        use: "url-loader?prefix=font/&limit=5000&name=[name]-[hash].[ext]"
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: "url-loader?limit=10000&mimetype=application/octet-stream"
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          "file-loader?hash=sha512&digest=hex&name=[name]-[hash].[ext]",
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true
              },
              gifsicle: {
                interlaced: false
              },
              optipng: {
                optimizationLevel: 4
              },
              pngquant: {
                quality: "75-90",
                speed: 3
              }
            }
          }
        ]
      }
    ]
  }
};
