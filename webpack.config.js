const qs = require('querystring')
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer')
const Dotenv = require('dotenv-webpack')

const projectPath = path.resolve(__dirname, './')
const plugins = []
const postcssPlugins = []
const dir = {
  project: projectPath,
  src: path.join(projectPath, 'src'),
  js: path.join(projectPath, 'src/js'),
  css: path.join(projectPath, 'src/css'),
  assets: path.join(projectPath, 'assets'),
  config: path.join(projectPath, 'config'),
  build: path.join(projectPath, 'build'),
  public: path.join(projectPath, 'public'),
  mocks: path.join(projectPath, 'src/__mocks__'),
}

module.exports = (env = {}, argv) => {
  plugins.push(
    new webpack.EnvironmentPlugin({
      NODE_ENV: argv.mode,
    })
  )

  plugins.push(
    new HtmlWebpackPlugin({
      title: 'Index',
      template: `${dir.mocks}/index.ejs`,
      filename: 'index.html',
      chunks: ['index'],
    })
  )

  // browser list doc -> https://github.com/ai/browserslist#queries
  postcssPlugins.push(autoprefixer())

  const entry = {
    index: `${dir.js}/index.js`,
  }

  return {
    context: dir.project,
    entry,
    output: {
      filename: '[name]-[contenthash].js',
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
            },
          ],
        },
      ]
    },
    plugins: plugins,
    resolve: {
      extensions: ['.js'],
      modules: ['node_modules', dir.src],
    },
    devServer: {
      contentBase: dir.build,
      port: 8080,
      host: '0.0.0.0',
      disableHostCheck: true,
      historyApiFallback: true,
      inline: true,
    },
  }
}
