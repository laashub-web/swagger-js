const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    'swagger-client': [
      './src/index.js'
    ]
  },

  devtool: 'source-map',

  output: {
    path: path.join(__dirname, 'dist'),
    libraryTarget: 'commonjs2',
    filename: 'index.js'
  },

  module: {
    rules: [{
      test: /\.js/,
      loader: 'babel-loader?retainLines=true',
      exclude: [
        /node_modules/
      ]
    }]
  },

  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.json']
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ]
}
