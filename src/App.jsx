import React from 'react';
import './App.css';
import Home from "./components/home/Home";
import { Helmet } from 'react-helmet';


function App() {
  return (
    <>
	    <Helmet>
            <title>Emirates | A clone site</title>
        </Helmet>
        <Home/>
	</>
  )
}

export default App
