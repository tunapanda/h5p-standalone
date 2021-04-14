const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    main: './src/js/index.js',
    frame: './src/js/frame.js'
  },
  output: {
    filename: '[name].bundle.js',
    sourceMapFilename: "[name].js.map",
    path: path.resolve(__dirname, 'dist'),
    library: {
      root: 'H5PStandalone',
      amd: 'h5p-standalone',
      commonjs: 'h5p-standalone'
    },
    libraryExport: "default",
    libraryTarget: 'umd'
  },
  resolve: {
    alias: {
      h5pjquery: require.resolve(path.resolve(__dirname, 'vendor/h5p/js', 'jquery')),
      H5P: path.resolve(__dirname, 'vendor/h5p/js', 'h5p'),
      H5PIntegration: require.resolve(path.resolve(__dirname, 'src/js', 'h5p-integration')),
      H5PEventDispatcher: require.resolve(path.resolve(__dirname, 'vendor/h5p/js', 'h5p-event-dispatcher')),
      H5PxAPI: require.resolve(path.resolve(__dirname, 'vendor/h5p/js', 'h5p-x-api')),
      H5PxAPIEvent: require.resolve(path.resolve(__dirname, 'vendor/h5p/js', 'h5p-x-api-event')),
      H5PContentType: require.resolve(path.resolve(__dirname, 'vendor/h5p/js', 'h5p-content-type')),
      H5PActionBar: require.resolve(path.resolve(__dirname, 'vendor/h5p/js', 'h5p-action-bar')),
      H5PRequestQueue: require.resolve(path.resolve(__dirname, 'vendor/h5p/js', 'request-queue')),
      H5PConfirmationDialog: require.resolve(path.resolve(__dirname, 'vendor/h5p/js', 'h5p-confirmation-dialog')),
      'h5p-standalone': require.resolve(path.resolve(__dirname, 'src/js', 'index'))
    }
  },
  module: {
    rules: [
      {
        test: require.resolve(path.resolve(__dirname, 'vendor/h5p/js', 'h5p')),
        use: ['exports-loader?exports=default|H5P', 'imports-loader?imports=default|h5pjquery|jQuery'],
      },
      {
        test: /src\/.*\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              ["@babel/plugin-transform-runtime",
                {
                  "regenerator": true
                }
              ]
            ]
          }
        }
      },
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'vendor/h5p/styles', to: 'styles' },
        { from: 'vendor/h5p/fonts', to: 'fonts' },
      ]
    }),
  ]
};