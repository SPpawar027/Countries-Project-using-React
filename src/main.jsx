import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import { Home } from './components/Home.jsx'
import { Contact } from './components/Contact.jsx'
import { Error } from './components/Error.jsx'
import { CountryDetail } from './components/CountryDetail.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:<Error/>  ,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/:country",
        element: <CountryDetail/>
      }
    ]
      
    
  },

]);

createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />

)
