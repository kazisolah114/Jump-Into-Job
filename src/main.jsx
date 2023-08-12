import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './Main/Main.jsx';
import Home from './Home/Home/Home.jsx';
import Resume from './Components/Resume/Resume/Resume.jsx';
import Register from './Components/Register/Register.jsx';
import Login from './Components/Login/Login.jsx';
import AllJobs from './Components/AllJobs/AllJobs.jsx';
import JobDetails from './Components/AllJobs/JobDetails/JobDetails.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'alljobs',
        element: <AllJobs></AllJobs>,
        children: [
          {
            path: 'jobdetails/:id',
            element: <JobDetails></JobDetails>,
            loader: () => fetch('/alljobs.json')
          }
        ]
      },
      {
        path: 'resume',
        element: <Resume></Resume>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'signin',
        element: <Login></Login>
      }
    ]
  }
  
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
