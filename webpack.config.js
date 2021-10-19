// internal module
const path = require("path"); // (내장) 경로 탐지

// plugin
const HtmlWebpackPlugin = require("html-webpack-plugin"); // html 읽어서 묶어주는 플러그인
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // css
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const webpack = {
  // 모드
  mode: "development" || "product",
  // import 시 생략가능
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  // 입구
  entry: {
    app: "./src/index",
  },
  // 출구
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },

  // 모듈 설정
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        use: ["babel-loader", "ts-loader"],
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
    // html 을 webpack이 읽을수 있게 해주는 플러그인 , 써드파티 플러그인
    new HtmlWebpackPlugin({
      filename: "index.html", //Name of file in ./dist/
      template: "public/index.html", //Name of template in ./src
      hash: true,
      removeComments: true, // 주석 제거
    }),
    // css를 import 형태로 사용해서 link 로 html 에 묶어준다.
    new MiniCssExtractPlugin({
      filename: "app.css",
    }),
    // 이전 빌드 결과물을 제거해준다.
    new CleanWebpackPlugin(),
  ],

  // dev
  devServer: { port: 9000, hot: true },
};

module.exports = webpack;
