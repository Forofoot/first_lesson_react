import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Calbard from 'containers/Calbard';
import Clock from 'containers/Clock';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,
  Route,
  createBrowserRouter,
  RouterProvider, } from "react-router-dom";
import People from 'containers/People';


const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children: [
      {
        path: "/clock",
        element: <Clock/>
      },
      {
        path: "/list",
        element: <Calbard/>
      },
      {
        path: "/people",
        element: <People/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
