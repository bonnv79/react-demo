module.exports = {
    resolve: {
      extensions: ['', '.js', '.jsx'],
      alias: {
        underscore: 'lodash'
      }
    },
    module: {
      preLoaders: [
        {
          test: /\.jsx?$/,
          loader: 'eslint-loader',
          exclude: /node_modules/
        }
      ],
      loaders: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: [
              'es2015',
              'stage-0',
              'react'
            ],
            plugins: [
              'transform-decorators-legacy'
            ]
          }
        }
      ]
    },
    eslint: {
      test: /\.jsx?$/,
      loaders: ['eslint-loader'],
      exclude: /node_modules/
    }
  }