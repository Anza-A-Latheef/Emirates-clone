import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar';
import Spotlight from './Spotlight';
import Tabs from "../home/Tabs-section/Tabs";
import Services from './Services';
import Bestprice from './Bestprice/Bestprice';
import Offer from './Offer';
import Experience from './Experience/Exp-head';
import About from './About';
import Footer from '../footer/Footer';
import FeedBackPopup from '../FeedBackPopup';


const Home = () => {

  return (
    <>
      <HomeContainer>
        <Navbar/>
        <Spotlight/>
        <Tabs/>
        <Services/>
        <Bestprice/>
        <Offer/>
        <Experience/>
        <About/>
        <Footer/>
      </HomeContainer>
      <FeedBackPopup/>
    </>
  )
}

export default Home

const HomeContainer=styled.section`
  background-color: #f6f6f6;
  position: relative;
`;

