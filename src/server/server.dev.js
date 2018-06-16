const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const createServer = require('./createServer');

const DIST_PATH = path.resolve(__dirname, '../../dist');
const WEBPACK_CONFIG_PATH = process.env.NODE_ENV === 'production' 
  ? path.resolve(__dirname, '../../internals/webpack/webpack.prod.config.js')
  : path.resolve(__dirname, '../../internals/webpack/webpack.dev.config.js');

const webpackConfig = require(WEBPACK_CONFIG_PATH);
const webpackCompiler = webpack(webpackConfig);

module.exports = createServer((app) => {
  console.log('[info] configuring development server');

  app.use(webpackDevMiddleware(webpackCompiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
      color: true,
    },
  }));
  
  app.use(webpackHotMiddleware(webpackCompiler, {
    heartbeat: 2000,
  }));

  app.use('*', (req, res, next) => {
    // todo: platform conditional
    if (true /* mobile */) {
      const filename = path.resolve(webpackCompiler.outputPath, 'index.html');
      webpackCompiler.outputFileSystem.readFile(filename, function (err, result) {
        if (err) {
          console.log('Most likely the compilation did not succeed');
          throw new Error(err);
        }
        
        res.set('content-type','text/html');
        res.send(result);
        res.end();
      });
    } else {
      // ...
    }
  });  
});
