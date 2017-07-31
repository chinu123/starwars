const path = require('path');
module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: { presets: [ 'es2015', 'react' ] }
      },
      {
        test: /\.css$/,
        include: [path.resolve(__dirname, "src/app/starwar/containers/LoginPage"), path.resolve(__dirname, "node_modules/flexboxgrid/dist/")],
        loaders: ['style-loader', 'css-loader'],
      },
    ]
  }
}
