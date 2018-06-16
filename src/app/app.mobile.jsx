import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Logger from '@modules/Logger';

const ROOT_ID = 'app-main';

Logger.info(`App is running on env: ${process.env.NODE_ENV}`);

/**
 * Polyfills
 */
if ((typeof window !== 'undefined' && !window._babelPolyfill) 
  || (typeof global !== 'undefined' && !global._babelPolyfill)) {
  Logger.info(`babel-polyfill is imported, since it wasn't imported yet`);
  require('@babel/polyfill');
}

/**
 * Asynchronous importing, so that polyfill (above) is loaded before than 
 * importing other modules.
 */
(async () => {
  const configureStore = (await import('@src/state/configureStore')).default;
  const RouterContainer = (await import('@src/containers/app/RouterContainer/RouterContainer.mobile')).default;
  const globalStyle = (await import('@styles/globalStyle')).default();

  const rootEl = document.getElementById(ROOT_ID);
  const store = configureStore();

  const render = (Component) => {
    ReactDOM.render(
      <AppContainer warnings={false}>
        <Provider store={store}>
          <Component/>
        </Provider>
      </AppContainer>,
      rootEl,
    );
  };
  
  render(RouterContainer);

  if (module.hot) {
    module.hot.accept('./containers/app/RouterContainer/RouterContainer.mobile', () => {
      Logger.warn('Hot Module Replace');
      const RouterContainer = require('./containers/app/RouterContainer/RouterContainer.mobile').default;
      render(RouterContainer);
    });
  }
})();
