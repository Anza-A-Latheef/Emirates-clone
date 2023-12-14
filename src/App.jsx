import React,{useState} from 'react';
import './App.css';
import Home from "./components/home/Home";
import { Helmet } from 'react-helmet';
import Login from './components/login/Login';
import { Routes , Route, Navigate} from 'react-router-dom';


function App() {

  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const handleLogin = ({ userEmail }) => {
    setLoggedIn(true);
    setUserEmail(userEmail);
  };
  // console.log(isLoggedIn);

  return (
    <>
        <Helmet>
              <title>Emirates | A clone site</title>
        </Helmet>
        <Routes>
        <Route
          path="/"
          element={isLoggedIn ===true?(
            <Home userEmail={userEmail} />
          ) : (
            <Navigate to="login-page" replace={true} />
          )}
        />
        <Route path="Login-page" element={<Login onLogin={handleLogin} />} />
      </Routes>

        {/* <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="Login-page" element={<Login/>}/>
        </Routes> */}
	</>
  )
}

export default App
