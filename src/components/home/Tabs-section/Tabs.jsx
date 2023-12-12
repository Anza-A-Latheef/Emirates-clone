import React from 'react';
import styled from 'styled-components';
import Tabhead from "../Tabs-section/Tabhead";
import Tabsearch from '../Tabs-section/Tabsearch';
import Tabbooking from '../Tabs-section/Tabbooking';
import Tabaminities from '../Tabs-section/Tabaminities';
import Tabstatus from '../Tabs-section/Tabstatus';
import { Routes ,Route} from 'react-router-dom';

const Tabs = () => {
  return (
    <Wrapper>
      <TabContainer>
        <Tabhead/>
        <Routes>
          <Route path="/" element={<Tabsearch/>}/>
          <Route path="search-tab" element={<Tabsearch/>}/>
          <Route path="booking-tab" element={<Tabbooking/>}/>
          <Route path="aminities-tab" element={<Tabaminities/>}/>
          <Route path="status-tab" element={<Tabstatus/>}/>
        </Routes>
      </TabContainer>
    </Wrapper>
  )
}

export default Tabs

//styling area

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
