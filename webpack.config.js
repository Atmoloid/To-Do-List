const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Percorso del file JS principale
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Percorso del file HTML di origine
      filename: 'index.html',      // Nome del file generato
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,            // Per gestire i file CSS
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
