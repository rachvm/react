import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.js'
import Home from './components/Home/Home.js'
import PageOne from './components/Page1/Page1.js';
import PageTwo from './components/Page2/Page2.js';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/Home",
        element: <Home />,
      },
      {
        path: "/Page1",
        element: <PageOne />,
      },
      {
        path: "/Page2",
        element: <PageTwo />
      },
    ],
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
