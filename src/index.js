import React from 'react';
import ReactDOM from 'react-dom/client';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';

import App from './components/app/App';
import rootReducer from './store/rootReducer';
import {fetchExperts, setRoundData} from './store/reducers/dataReducer';
import {createAPI} from "./services/api";
import BrowserHistoryRouter from "./components/browserHistoryRouter/browserHistoryRouter";
import history from "./browserHistory";

export const api = createAPI();

export const store = configureStore({
  reducer: rootReducer
})

store.dispatch(fetchExperts())

// будет потом подтягиваться санкой из АПИ
store.dispatch(setRoundData({
  status: 1,
  timeLeft: 202530,
}))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserHistoryRouter history={history}>
      <App/>
    </BrowserHistoryRouter>
  </Provider>
);

