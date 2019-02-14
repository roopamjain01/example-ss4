const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    index: "./src/index.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: {
          presets: [["env",  {useBuiltIns: true}], "react", "flow"],
        },
      },
      {
        test: /\.(scss|css)$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.graphql?$/,
        use: [
          {
            loader: "webpack-graphql-loader",
            options: {
              output: "string",
              minify: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {extensions: ["*", ".js", ".jsx"]},
  output: {
    path: path.resolve(__dirname, "./dist"),
    hotUpdateChunkFilename: "hot/hot-update.js",
    hotUpdateMainFilename: "hot/hot-update.json",
    publicPath: "/resources/lpf-tool/client/dist/",
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundle.js",
  },
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      },
      name: (module, chunks, cacheGroupKey) => {
        return `${cacheGroupKey}`;
      },
    },
  },
  devtool: "source-map",
  performance: {
    maxEntrypointSize: 400000,
    assetFilter: (assetFilename) => {
      return assetFilename.endsWith('.js') && assetFilename !== "vendors.bundle.js";
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};
