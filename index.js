'use strict';

const slsw = require('serverless-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');


const convertPattern = (path) => {
  if (path.endsWith('*')) return path;
  if (!path.includes('/')) return path;

  const i = path.lastIndexOf('/');
  return { from: path, to: path.substring(0, i) + '/' };
};

class ServerlessCopyWebpackPlugin {
  constructor() { }

  apply(compiler) {
    const functionName = compiler.options.output.path.substring(compiler.options.output.path.lastIndexOf('/') + 1)
    if (slsw.lib.serverless.service) {
      const config = slsw.lib.serverless.service.functions[functionName]
      let includePaths = config && config.package && config.package.include || [];
      includePaths = includePaths.map(convertPattern);
      if (includePaths.length) {
        new CopyWebpackPlugin({ patterns: includePaths }).apply(compiler);
      }
    }
  }
}

module.exports = ServerlessCopyWebpackPlugin;
