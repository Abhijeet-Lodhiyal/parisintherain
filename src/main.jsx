import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter,RouterProvider,Route} from 'react-router-dom';
import ContactUs from './ContactUs';
import Places from './Place To Visit/Places';
import Cuisines from './Cuisine Of Paris/Cuisines';
import Hotels from './Hotel in Paris/Hotels';
import Transportation from './Transport/Transportation';

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
  },
  {
    path:"/contact",
    element: <ContactUs />
  },
  {
    path:"/cuisines",
    element:<Cuisines />
  },
  {
    path:"/places",
    element:<Places/>
  },
  {
    path:"/hotels",
    element:<Hotels />
  },
  {
    path:"/transportation",
    element:<Transportation />
  }
  

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
