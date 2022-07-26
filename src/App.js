import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import UserContext from './context/user';
import useAuthListener from './hooks/use-auth-listener';
import 'react-loading-skeleton/dist/skeleton.css'
import PageRoute from './components/PageRoute';


function App() {
  const { user } = useAuthListener();
  return (
    <UserContext.Provider value={{ user }}>
    <Router>
       <PageRoute user = {user}/>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
