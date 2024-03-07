import React, { useState, useEffect} from 'react';
import { Routes, Route} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Book from './components/Bookplaces/Book';
import LoyaltyJoin from './components/LoyaltyJoin';
import SearchPage from '../src/components/Searchflight/SearchPage';

import "./App.css";
import Success from './components/success';



export const UserContext = React.createContext();
export const PaymentContext = React.createContext();

function App() {
const [emiratesFlight,setEmiratesFlight]=useState([]);
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
        <PaymentContext.Provider value={{emiratesFlight,setEmiratesFlight}}>
      <Helmet>
        <title>Emirates | A clone site</title>
      </Helmet>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="Login-page" element={<Login/>}/>
          <Route path='/singleitem' element={<Book/>}/>
          <Route path="Loyalty-page" element={<LoyaltyJoin/>}/>
          <Route path="/success" element={<Success/>}/>
          <Route path="/Search-page/:departure/:arrival/:totalPassenger/:classes/:departureDate/:returnDate" element={<SearchPage/>} />
        </Routes>
      </PaymentContext.Provider>
          </UserContext.Provider>
    </>
  );
}

export default App;
