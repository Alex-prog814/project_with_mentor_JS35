import React from 'react'
import HomePage from '../pages/HomePage'
import RegisterPage from '../pages/RegisterPage'
import LoginPage from '../pages/LoginPage'
import { Route, Routes } from 'react-router-dom'

const MainRoutes = () => {
    const ROUTES =[
        {
            id:1,
            path:'/',
            element:<HomePage/>
        },
        {
            id:2,
            path:'/register',
            element:<RegisterPage/>
        },
        {
            id:3,
            path:'/login',
            element:<LoginPage/>
        },
    ]
  return (
    <Routes>
        {ROUTES.map(route => (
            <Route key={route.id} path={route.path} element={route.element}/>
        ))}
    </Routes>
  )
}

export default MainRoutes