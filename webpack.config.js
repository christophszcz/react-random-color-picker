module.exports = {
  entry: './public/app.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader', 
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	}
};
