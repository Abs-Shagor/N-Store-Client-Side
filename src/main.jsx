import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify';
import './index.css'


import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Components/Root';
import DataProvider from './Providers/DataProvider';
import Home from './Components/Home';
import Mens from './Components/Mens';
import Womens from './Components/Womens';
import Jewelaries from './Components/Jewelaries';
import Electronics from './Components/Electronics';
import ProductDetails from './Components/ProductDetails';
import Login from './Components/Login';
import Signup from './Components/SignUp';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/mens',
        element: <Mens></Mens>
      },
      {
        path: '/womens',
        element: <Womens></Womens>
      },
      {
        path: '/jewelaries',
        element: <Jewelaries></Jewelaries>
      },
      {
        path: '/electronics',
        element: <Electronics></Electronics>
      },
      {
        path: '/products/:id',
        element:  <ProductDetails></ProductDetails> ,
        loader: ({params}) => {
          return fetch(`https://fakestoreapi.com/products/${params.id}`)
        }
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <Signup></Signup>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
      <RouterProvider router={router}></RouterProvider>
    </DataProvider>
    <ToastContainer />
  </StrictMode>
)