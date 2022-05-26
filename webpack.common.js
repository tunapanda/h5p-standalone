const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.ts',
    frame: './src/frame.ts'
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
    extensions: ['.js', '.ts'], //try if *js first then *.ts
  },
  module: {
    rules: [
      {
        //H5P jquery should be exported under H5P variable
        test: require.resolve(path.resolve(__dirname, 'vendor/h5p/js', 'jquery')),
        use: 'exports-loader?exports=H5P'
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
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
          },
          {
            loader: 'ts-loader'
          }
        ]
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