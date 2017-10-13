import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './font-awesome/css/font-awesome.min.css'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route ,Switch} from 'react-router-dom'
import promise from 'redux-promise' ;
import reducer from './reducers' ;
import RecipeListing from './components/recipe-listing';
import Recipe from './components/recipe'
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/antd/dist/antd.css';
global.requestAnimationFrame = function(callback) {
  setTimeout(callback, 0);
};
//const store = createStore(reducer)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 

const createStoreWithMiddleware = composeEnhancers(applyMiddleware(promise))(createStore);
/*
const store = createStore(
  reducer,
  composeEnhancers(
       applyMiddleware(logger)
  )
 
//  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
*/


ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducer)}>
      <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/recipe/:id" component={Recipe} />
          <Route exact path="/" component={RecipeListing} />
          
        </Switch>

       
      </div>

    </BrowserRouter>
    
    </Provider>
    , document.getElementById('root')


);


registerServiceWorker();
