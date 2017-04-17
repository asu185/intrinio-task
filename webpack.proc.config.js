module.exports = {  
  entry: {
    main: './public/src/main.js'
  },
  output: {
    path: __dirname + '/public',
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
      { test: /\.css$/, loader: 'style-loader!css-loader'},
    ],
  },
}
