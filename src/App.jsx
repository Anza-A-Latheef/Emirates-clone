import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Helmet } from 'react-helmet';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
	 <Helmet>
        <title>Emirates | A clone site</title>
    </Helmet>
	<Navbar/>
	</>
  )
}

export default App
