import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import 'normalize.css';
import { injectGlobal } from 'styled-components';

import App from 'components/App';
import registerServiceWorker from 'utils/registerServiceWorker';

injectGlobal`
  //@import url('https://fonts.googleapis.com/css?family=Barlow+Semi+Condensed';

  body {
    font-family: 'Barlow Semi Condensed', sans-serif;
  }
`;

function render(Component) {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  );
}

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    // eslint-disable-next-line global-require
    const nextApp = require('./components/App').default;
    render(nextApp);
  });
}

registerServiceWorker();
