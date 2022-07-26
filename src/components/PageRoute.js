import React, { lazy, Suspense } from 'react';
import { useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import * as ROUTES from '../constants/routes'
import 'react-loading-skeleton/dist/skeleton.css'
import Profile from '../pages/profile';
import { useNavigate } from "react-router-dom";

const Login = lazy(() => import ('../pages/login'))
const SignUp = lazy(() => import ('../pages/signup'))
const Dashboard = lazy(() => import ('../pages/dashboard'))
const NotFound = lazy(() => import ('../pages/notfound'))
function PageRoute(props) {
    const navigate = useNavigate()
    useEffect(() => {
        if(props.user == null){
            navigate(ROUTES.LOGIN)
        }
    },[]);
  return (
    <Suspense fallback={<p>Loading...</p>}> 
    <Routes>
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
      <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
      <Route path={ROUTES.PROFILE} element={<Profile />} />
      <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
      <Route  element={<NotFound />} />
    </Routes>
   </Suspense>
  )
}

export default PageRoute;