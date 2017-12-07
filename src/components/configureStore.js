import {createStore} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../reducers';

export default function configureStore(initalState){
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

  if(module.hot){
    module.hot.accept(() => {
      const nextRootReducer = require('../reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
