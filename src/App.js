import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as ROUTES from './constants/routes'
import UserContext from './context/user';
import useAuthListener from './hooks/use-auth-listener';
import 'react-loading-skeleton/dist/skeleton.css'
import Profile from './pages/profile';


const Login = lazy(() => import ('./pages/login'))
const SignUp = lazy(() => import ('./pages/signup'))
const Dashboard = lazy(() => import ('./pages/dashboard'))
const NotFound = lazy(() => import ('./pages/notfound'))

function App() {
  const { user } = useAuthListener();
  return (
    <UserContext.Provider value={{ user }}>
    <Router>
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
    </Router>
    </UserContext.Provider>
  );
}

export default App;
