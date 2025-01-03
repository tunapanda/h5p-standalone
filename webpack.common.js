const path = require('path');
const fs = require('fs');
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
        { from: 'vendor/h5p/styles/font-open-sans.css', to: 'styles' },
        { from: 'vendor/h5p/fonts', to: 'fonts' },
        { from: 'vendor/h5p/images', to: 'images' },
        { from: 'src/**/*.d.ts', to: '[name][ext]' },
  ]
    }),
    CssMergePlugin(
      'styles/h5p.css',
      [
        // styles files required by h5p player and not explicitly loaded
        'vendor/h5p/styles/h5p.css',
        'vendor/h5p/styles/h5p-confirmation-dialog.css',
        'vendor/h5p/styles/h5p-core-button.css',
        'vendor/h5p/styles/h5p-tooltip.css',
        'vendor/h5p/styles/h5p-table.css',
      ]
    )
  ]
};


function CssMergePlugin(outputFilename, cssFilesToMerge = []) {
  return {
    apply: (compiler) => {
      compiler.hooks.emit.tapAsync('CssMergePlugin', (compilation, callback) => {

        // Read content of the files to merge
        const mergedCssContent = cssFilesToMerge
          .map((filePath) => fs.readFileSync(filePath, 'utf8'))
          .join('\n'); // Join the CSS content

        // Ensure the output directory exists

        fs.mkdirSync(path.resolve(compiler.options.output.path, path.dirname(outputFilename)), { recursive: true });


        // Write the merged content
        fs.writeFileSync(path.resolve(compiler.options.output.path, outputFilename), mergedCssContent);

        callback(); // Continue Webpack build
      });
    }
  }
}