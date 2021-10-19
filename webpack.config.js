// internal module
const path = require("path"); // (내장) 경로 탐지

// plugin
const HtmlWebpackPlugin = require("html-webpack-plugin"); // html 읽어서 묶어주는 플러그인
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // css

const webpack = {
  // 모드
  mode: "development" || "product",
  // dev
  devServer: { port: 9000 },
  // import 시 생략가능
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  // 입구
  entry: ["./src/index"],
  // 출구
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },

  // 모듈 설정
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: ["ts-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true,
            },
          },
        ],
      },
    ],
  },

  // 플러그인
  plugins: [
    // html 을 webpack이 읽을수 있게 해주는 플러그인
    new HtmlWebpackPlugin({
      filename: "index.html", //Name of file in ./dist/
      template: "public/index.html", //Name of template in ./src
      hash: true,
    }),
    // css를 import 형태로 사용해서 link 로 html 에 묶어준다.
    new MiniCssExtractPlugin({
      filename: "app.css",
    }),
  ],
};

module.exports = webpack;
