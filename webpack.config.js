const path = require('path')

module.exports = {
  devtool: 'source-map',
  entry: {
    main: './public/src/main.js'
  },
  output: {
    path: path.join(__dirname + '/public/'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [      
      { test: /\.js$/, 
        exclude: /node_modules/, 
        loader: "babel-loader", 
        query: { 
          presets: ['react','es2015']
        }
      },
      { test: /\.json$/, loader: 'json-loader' },
    ],
  },
}
