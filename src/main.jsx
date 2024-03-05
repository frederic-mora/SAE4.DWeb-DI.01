import React from 'react';
import ReactDOM from 'react-dom/client';
import ErrorPage from './ui/ErrorPage/index.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Root from './routes/root.jsx';
import OurTeams, {loader as ourTeamsLoader} from './routes/ourteams.jsx';
import Store, {loader as storeLoader} from './routes/store.jsx';
import About from './routes/about.jsx';

import './index.css';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'team/:teamName',
        element: <OurTeams />,
        loader: ourTeamsLoader
      },
      {
        path: 'buy',
        element: <Store />,
        loader: storeLoader
      }
    ]
  }, 
  {
    path: '/about',
    element: <About />
  }
]);

const rootElement = document.querySelector('#root');

if (rootElement) {
  ReactDOM.createRoot(document.querySelector('#root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  )
} else {
  console.error('No root element found');
}
