// import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './componenents/Header'
import Body from "./componenents/Body"
import Footer from "./componenents/Footer"
import About from "./componenents/About"
import Contact from "./componenents/Contact"
import Error from './componenents/Error'
import SignIn from './componenents/SignIn'
import Filters from './componenents/Filters'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
  
const App = (() =>  {

  return (
    <>
      <Header />
      <Filters />
      <Body></Body>
      {/* <Outlet></Outlet> */}
      {/* <Body/> */}
      <Footer />
    </>
  )
})

const AppRouter= createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
        {
          path: "/",
          element: <Body />
        },
        {
          path: "/about",
          element: <About />,
          
        },
        {
          path: "/contact",
          element: <Contact />
        }
        
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);

/* Nav
    - Logo
    - Links
    - Sign In/Up button
    - Cart
  header
    - heading
    - banner
    - What's in your mind
    - different types of foods according to ti
  - Food Cards
    - food image
    - food price
    - description
  - Footer
*/   
