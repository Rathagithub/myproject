import * as React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import reducer from './components/store/reducer';
import httpClient, { setupInterceptors } from './API'
import FormTab from './components/FormTab'

const store = createStore(reducer, applyMiddleware(thunk.withExtraArgument(httpClient)))
setupInterceptors(httpClient)

const App = () => {
 return (
  <Provider store={store}>
   <FormTab />
  </Provider>
 );
}

export default App;
