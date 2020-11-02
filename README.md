# serverless-copy-webpack-plugin

![version](https://img.shields.io/npm/v/serverless-copy-webpack-plugin) ![downloads](https://img.shields.io/npm/dm/serverless-copy-webpack-plugin)

Webpack plugin to be used in combination with serverless-webpack to allow copying files to individual functions

**Note**: *Originated from the discussion in [serverless-webpack issues #425](https://github.com/serverless-heaven/serverless-webpack/issues/425). Based on the code by [@Omicron7](https://github.com/Omicron7) and [@raymond-w-ko](https://github.com/raymond-w-ko)*

## Usage

To begin, install the plugin as dev dependency

    $ npm install serverless-copy-webpack-plugin --save-dev

Then add the plugin to your `webpack.config.js`

    const ServerlessCopyWebpackPlugin = require('serverless-copy-webpack-plugin');

    module.exports = {
      plugins: [
        new ServerlessCopyWebpackPlugin()
      ],
    };

The plugin will now copy any resources defined in your individual package **includes** to the artifacts for those functions. For example:

    functions:
      hello:
        handler: handler.hello
        package:
          include:
            src/static/*.html

will copy any html files in the `src/static` folder to the corresponding function package
