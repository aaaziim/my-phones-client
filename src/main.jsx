import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Root.jsx'
import Home from './components/Home.jsx'
import Phones from './components/Phones.jsx'
import Phone from './components/Phone.jsx'

const router = createBrowserRouter([
  {
  
    path:"/",
    element: <Root></Root>,
    children:[
      {
      path: "/",
      element:<Home></Home>

      },
      {
      path: "/phones",
      element:<Phones></Phones>,
      loader: ()=> fetch("http://localhost:3000/phones")

      },
      {
      path: "/phone/:id",
      element:<Phone></Phone>,
      loader: ({params})=> fetch(`http://localhost:3000/phone/${params.id}`)

      }
  ]
  } 
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </StrictMode>,
)
