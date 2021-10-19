// internal module
const path = require("path"); // (내장) 경로 탐지

// third party module
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

// plugin
const HtmlWebpackPlugin = require("html-webpack-plugin"); // html 읽어서 묶어주는 플러그인
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // css
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const webpack = {
  // 모드
  mode: "development" || "product",
  // import 시 확장자 생략
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    plugins: [new TsconfigPathsPlugin()], // tsconfig 경로 설정 웹펙에 적용
  },
  // 입구
  entry: {
    index: "./src/index",
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
      {
        test: /\.(ttf|eot|woff|woff2|svg|png|ico|jpg|jpeg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              publicPath: "./", // 경로가 맞지 않으면 이미지가 보여지지 않는다.
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
      // favicon: "public/favicon.ico",
      hash: true,
      removeComments: true, // 주석 제거
    }),
    // css를 import 형태로 사용해서 link 로 html 에 묶어준다.
    new MiniCssExtractPlugin({
      filename: "index.css",
    }),
    // 이전 빌드 결과물을 제거해준다.
    new CleanWebpackPlugin(),
  ],

  // dev-server , 웹펙 서버 사용시 옵션 설정
  devServer: {
    port: 8080,
    hot: true,
    historyApiFallback: true, // 테스트 url get요청 404 막기
    open: true,
  },
};

module.exports = webpack;
