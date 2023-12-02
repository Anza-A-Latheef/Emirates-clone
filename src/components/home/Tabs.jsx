import React from 'react';
import styled from 'styled-components';
import Tabhead from "./Tabhead";
import Tabsearch from './Tabsearch';
import Tabbooking from './Tabbooking';
import Tabaminities from './Tabaminities';
import Tabstatus from './Tabstatus';

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
`;
const TabContainer=styled.div`
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 5px;
    width: 81.5%;
    /* height: 232px; */
    background-color: white;
    position: absolute;
    top: -60px;
`;