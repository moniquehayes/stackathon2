module.exports = {
    entry: ['./src/index.js'],
    output: {
      path: __dirname + '/public',
      filename: 'bundle.js',
    },
    context: __dirname,
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
          resolve: {
            extensions: [".jsx", ".js"],
          },
        },
        {
          test: /\.(css)$/,
          loader: 'css-loader'
        }
      ],
    },
  };