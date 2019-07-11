const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const webpack = require('webpack');

module.exports = {
  mode: "development",
  // 文件入口
  entry: {
    // bundle: "./src/index.js",
    app: './src/index.js',
  },
  // 文件出口
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  // 错误代码 映射
  // devtool: 'inline-source-map',
  // 本地服务 代理
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin(), // 清空编译文件
    new HtmlWebpackPlugin({ // 文件index模板
      title: 'myWebpack',
      template: path.resolve(__dirname, 'public/index.html'),
      inject: true,
      minify: {
        removeComments: true
      }
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
    // new ManifestPlugin() // 映射表
  ],
  module: {
    rules: [{
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      }
    ]
  }
}