import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Home from './components/home/Home';
import Login from './components/login/Login';
import "./App.css"

function App() {
  const [userEmail, setUserEmail] = useState('');
  const navigate = useNavigate();

  function handleLogin({ userEmail }){
    setUserEmail(userEmail);
    localStorage.setItem('userEmail', userEmail);
    navigate('/');
  };


  useEffect(() => {
    const storedUserEmail = localStorage.getItem('userEmail');
    if (storedUserEmail) {
      setUserEmail(storedUserEmail);
      navigate('/');
    } else {
      navigate('Login-page');
    }
  }, [navigate]);

  return (
    <>
      <Helmet>
        <title>Emirates | A clone site</title>
      </Helmet>
        <Routes>
          <Route path="/" element={<Home userEmail={userEmail} />} />
          <Route path="Login-page" element={<Login onLogin={handleLogin} />} />
        </Routes>
    </>
  );
}

export default App;
