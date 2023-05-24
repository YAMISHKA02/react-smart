import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';

import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import rootReducer from './store/rootReducer';
import {fetchExperts, setVoteStatus} from './store/reducers/dataReducer';
import {createAPI} from "./services/api";

const root = ReactDOM.createRoot(document.getElementById('root'));

export const api = createAPI();

export const store = configureStore({
  reducer: rootReducer})


store.dispatch(fetchExperts())
store.dispatch(setVoteStatus('started'))



root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);


