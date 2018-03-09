import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './components/containers/AppContainer/AppContainer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppContainer />, document.getElementById('root'));
registerServiceWorker();
