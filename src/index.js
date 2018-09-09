import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import rootReducers from './reducers/index';
import registerServiceWorker from './registerServiceWorker';


const store = createStore(rootReducers,
    applyMiddleware(logger)

    )

ReactDOM.render(
    <Provider store ={ store }>
        <App/>
    </Provider>,
 document.getElementById('root'));
registerServiceWorker();
