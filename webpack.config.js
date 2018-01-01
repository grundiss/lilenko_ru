var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/client/pages/main/browser.js",
  },
  output: {
    path: path.join(__dirname, "./dist/static/js"),
    filename: "[name].bundle.js",
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        query: {
          babelrc: false,
          presets: ["react", "env"],
        },
      },
      {
        test: /\.css$/,
        //include: path.join(__dirname, "src"),
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: "css-loader",
              options: {
                modules: true,
                localIdentName: "[local]_[hash:base64:5]",
                imports: true,
              },
            },
          ],
          fallback: "style-loader",
        }),
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name]__[hash].[ext]",
            outputPath: "../assets/",
            useRelativePath: false,
          },
        },
      },
    ],
  },
  plugins: [new ExtractTextPlugin({ filename: "../css/[name].bundle.css", allChunks: true })],
  resolve: {
    modules: [path.join(__dirname, "src"), "node_modules"],
    extensions: [".js", ".jsx"],
  },
};
