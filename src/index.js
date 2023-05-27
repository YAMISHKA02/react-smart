import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';

import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import rootReducer from './store/rootReducer';
import {fetchExperts, setRoundData} from './store/reducers/dataReducer';
import {createAPI} from "./services/api";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainPage from "./components/pages/MainPage/MainPage";
import ExpertProfile from "./components/pages/ExpertProfile/ExpertProfile";
import UserProfile from "./components/pages/UserProfile/UserProfile";
import Role from "./components/pages/Role/Role";
import EditExpertProfile from "./components/pages/EditExpertProfile/EditExpertProfile";


// const root = ReactDOM.createRoot(document.getElementById('root'));

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

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        index: true,
        element: <MainPage/>
      },
      {
        path: 'role',
        element: <Role/>
      },
      {
        path: 'edit',
        element: <EditExpertProfile/>
      },
      {
        path: 'profile/:id',
        element: <ExpertProfile/>
      },
      {
        path: 'profile',
        element: <UserProfile/>
      },
      {
        path: '*',
        element: <div style={{'textAlign': 'center', 'marginTop': 100}}>Страница не найдена</div>
      },
    ]
  }])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
);

