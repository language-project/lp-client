const del = require('del');
const express = require('express');
const fs = require('fs');
const i18n = require('marmoym-i18n');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const createServer = require('./createServer');
const pJson = require('../../package.json');

const DIST_PATH = path.resolve(__dirname, '../../dist');
const WEBPACK_CONFIG_PATH = process.env.NODE_ENV === 'production' 
  ? path.resolve(__dirname, '../../internals/webpack/webpack.prod.config.js')
  : path.resolve(__dirname, '../../internals/webpack/webpack.dev.config.js');

const webpackConfig = require(WEBPACK_CONFIG_PATH);
const webpackCompiler = webpack(webpackConfig);
const gitFetchHead = fs.readFileSync(path.resolve(__dirname, '../../.git/FETCH_HEAD'))
  .toString();

module.exports = createServer((app) => {
  // The state changes according to the status of compilation
  const state = {
    distFiles: undefined,
    status: 'launching',
    indexFile: undefined,
  };

  del(`${DIST_PATH}/*`).then(() => {
    console.log(`[info] Remove contents in ${DIST_PATH}`);
    console.log(`[info] Compile with webpack`);

    webpackCompiler.run((err, stats) => {
      const info = stats.toJson('errors-only');
  
      if (err || stats.hasErrors()) {
        console.error(info.errors);  
        state.status = 'error';
      } else {
        console.log(stats.toString({
          colors: true,
        }));
  
        state.status = "launched";
        state.indexFile = fs.readFileSync(path.join(DIST_PATH, 'index.html'));
        state.distFiles = fs.readdirSync(DIST_PATH);
      }
    });
  });

  // Serve static files, e.g. [bundle].js
  app.use(express.static(DIST_PATH));

  // Debug API
  app.get('/debug', (req, res, next) => {
    res.send({
      app_start_time: this.now,
      app_version: pJson.version,
      distFiles: state.distFiles,
      git_fetch_head: gitFetchHead,
      node_env: process.env.NODE_ENV,
      status: state.status,
    });
  });

  // Serve compiled output only when present
  app.use('*', (req, res, next) => {
    if (!state.indexFile) {
      res.send('App is being launched. Reload after 15 seconds');
    } else {
      res.set('content-type','text/html');

      // todo: platform conditional
      if (true /* mobile */) {
        res.send(state.indexFile);
        res.end();
      } else {
        // ...
      }
    }
  });
});
