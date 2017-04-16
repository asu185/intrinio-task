module.exports = {
  devtool: 'source-map',
  entry: {
    main: './public/src/main.js'
  },
  output: {
    path: __dirname + '/public/',
    filename: 'bundle.js',
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
