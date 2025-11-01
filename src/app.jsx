import React from 'react'
import NetflixLanding from './components/NetflixLanding';
import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom';
import Background from './components/Background'; 
import Login from './components/Login';
import Browse from './components/Browse';
import ErrorPage from './components/ErrorPage';

const Layout = () =>{
    return (
      <div>
         <h1>my name is </h1>
         <Outlet />
      </div>
    )

}
// Create router
const Approuter = createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    children:[
      {
        path:"/",
        element:<Login />,
      },
      {
        path:"/browse",
        element:<Browse />
      }

    ],
    errorElement:<ErrorPage />,
    
  },

])


// Main App component
const App = () => {
  return (
    <RouterProvider router={Approuter} />
  )
}


export default App;
