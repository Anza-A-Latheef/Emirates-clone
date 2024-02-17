import React, { useState, useEffect} from 'react';
import { Routes, Route} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Book from './components/Bookplaces/Book';
import LoyaltyJoin from './components/LoyaltyJoin';
import "./App.css";


export const UserContext = React.createContext();
function App() {
const [userData,setUserData]=useState({});
const updateUserData=(action)=>{
  switch(action.type){
    case "LOGOUT":
      setUserData(null);
      localStorage.clear;
      break;
    case "LOGIN":
      setUserData(action.payload);
      break;
    default:
      break
  }
};
useEffect(()=>{
  setUserData(JSON.parse(localStorage.getItem("user_data")));
},[])

  return (
    <>
    <UserContext.Provider value={{userData, updateUserData}}>
      <Helmet>
        <title>Emirates | A clone site</title>
      </Helmet>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="Login-page" element={<Login/>}/>
          <Route path='/singleitem' element={<Book/>}/>
          <Route path="Loyalty-page" element={<LoyaltyJoin/>}/>
        </Routes>
          </UserContext.Provider>
    </>
  );
}

export default App;
