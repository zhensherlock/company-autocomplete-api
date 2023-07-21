import path from 'path'
import nodeExternals from 'webpack-node-externals'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import TerserPlugin from 'terser-webpack-plugin'

module.exports = {
  entry: './src/app.ts', // 入口文件
  target: 'node', // 告诉Webpack打包为Node.js运行环境
  mode: 'production', // 设置打包模式
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', // 输出文件名
  },
  externals: [nodeExternals()], // 排除Node.js核心模块和其他特定于Node.js的模块
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
}
