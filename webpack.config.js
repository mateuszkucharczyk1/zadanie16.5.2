const path = require('path');
//webpack.config.js
module.exports = (env) => {
    return {
        mode: env || 'production',
        entry: './src/app.js',
        // reszta konfiguracji
        //...
    }
};
module.exports = (env) => {
  const environment =  env || 'production';
  return {
    mode: environment,
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'app.' + environment + '.bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: [
            {loader: 'style-loader'},
            {
              loader: 'css-loader',
              options: {
                modules: true
              }
            }
          ]
        }
      ]
    },
    optimization: {
      minimize: false
    }
  }
};
