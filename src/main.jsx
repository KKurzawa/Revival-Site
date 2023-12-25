import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import Home from '../src/Pages/Home/Home.jsx'
import Shows from '../src/Pages/Shows/Shows.jsx'
import Band from '../src/Pages/Band/Band.jsx'
import Testimonials from '../src/Pages/Testimonials/Testimonials.jsx'
import Contact from '../src/Pages/Contact/Contact.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/Shows',
        element: <Shows />
      },
      {
        path: '/Shows',
        element: <Shows />
      },
      {
        path: '/Band',
        element: <Band />
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: 'Testimonials',
        element: <Testimonials />,
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
