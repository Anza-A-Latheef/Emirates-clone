import React from 'react';
import styled from 'styled-components';
import Tabhead from "../Tabs-section/Tabhead";
import Tabsearch from '../Tabs-section/Tabsearch';
import Tabbooking from '../Tabs-section/Tabbooking';
import Tabaminities from '../Tabs-section/Tabaminities';
import Tabstatus from '../Tabs-section/Tabstatus';

const Tabs = () => {
  return (
    <Wrapper>
      <TabContainer>
        <Tabhead/>
        <Tabsearch/>
        <Tabbooking/>
        <Tabaminities/>
        <Tabstatus/>
      </TabContainer>
    </Wrapper>
  )
}

export default Tabs

//styling

const Wrapper=styled.div`
    padding:0px 125px;
    position: relative;
    height: 232px;
`;
const TabContainer=styled.section`
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 5px;
    width: 81.5%;
    background-color: white;
    position: absolute;
    top: -60px;
`;