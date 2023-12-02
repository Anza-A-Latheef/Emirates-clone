import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar';
import Spotlight from './Spotlight';
import Tabs from "../home/Tabs-section/Tabs";
import Services from './Services';
import Bestprice from './Bestprice/Bestprice';
import Offer from './Offer';


const Home = () => {
  return (
    <HomeContainer>
      <Navbar/>
        <Spotlight/>
        <Tabs/>
        <Services/>
        <Bestprice/>
        <Offer/>
    </HomeContainer>
  )
}

export default Home

const HomeContainer=styled.div`
  background-color: #f6f6f6;
`;

