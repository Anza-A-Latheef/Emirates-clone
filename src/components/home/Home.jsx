import React from 'react';
import styled from 'styled-components';
import Spotlight from './Spotlight';
import Tabs from "./Tabs";
import Services from './Services';


const Home = () => {
  return (
    <HomeContainer>
        <Spotlight/>
        <Tabs/>
        <Services/>
    </HomeContainer>
  )
}

export default Home

const HomeContainer=styled.div`
  background-color: #f6f6f6;
`;

