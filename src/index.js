import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import App from './components/App';
import { createStore,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import rootReducers from './reducers/index';
import GamePage from './components/GamePages'
import { BrowserRouter as Router, Route,NavLink } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';




const store = createStore(rootReducers,
    applyMiddleware(logger,thunk)

    )

ReactDOM.render(
    <Provider store ={ store }>
        <Router>
            <div className='ui container'>
              <div className='ui three item menu'>
                <NavLink exact className='item' to='/'>Home</NavLink>
                <NavLink exact className='item' to='/games'>Games</NavLink>
                <NavLink exact className='item' to='/'>Add new Games</NavLink>
              </div>
              <Route exact path='/' component={ App }/>
              <Route exact path='/games' component={ GamePage }/>
            </div>
        </Router>
       
    </Provider>,
 document.getElementById('root'));
registerServiceWorker();
