// 운영체제로 상이한 경로문법을 해결해주는 모듈을 가져오기
const path = require("path");
const { web } = require("webpack");
const webpack = require("webpack");
module.exports = {
  mode: "development",
  entry: {
    main: path.resolve("./src/app.js"),
  },
  output: {
    // publicPath: "/dist/",
    filename: "[name].js",
    path: path.resolve("./dist"),
  },
  module: {
    rules: [
      //   {
      //     //test에는 loader가 처리해야할 타겟을 설정 (모든 js 파일)
      //     test: /\.js$/,
      //     use: [
      //       //운영체제별로 다른 경로를 통일시켜주기위해 path.resolve
      //       path.resolve("./myLoader.js"),
      //     ],
      //   },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 20 * 1024,
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: "마지막 빌드 시간은 :" + new Date().toLocaleString() + "입니다.",
    }),
  ],
};
