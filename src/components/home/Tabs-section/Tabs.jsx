import React,{useState} from 'react';
import styled from 'styled-components';
import Tabsearch from '../Tabs-section/Tabsearch';
import Tabbooking from '../Tabs-section/Tabbooking';
import Tabaminities from '../Tabs-section/Tabaminities';
import Tabstatus from '../Tabs-section/Tabstatus';
import { GiCommercialAirplane } from "react-icons/gi";
import { BsFillTagFill } from "react-icons/bs";
import { GiPlaneWing } from "react-icons/gi";
import { FaClock } from "react-icons/fa";

const Tabs = () => {
    const [tabTitle,setTabTitle]=useState(1);
    const TabChange=(index)=>{
        setTabTitle(index)
    };

  return (
    <Wrapper>
       <TabContainer>
        <TabheadContainer>
            <Tabhead_ul>
                <Tabhead_li className={tabTitle===1?'active':''} onClick={()=>TabChange(1)}><Tabhead_a><GiCommercialAirplane /> Search Flights</Tabhead_a></Tabhead_li>
                <Tabhead_li className={tabTitle===2?'active':''} onClick={()=>TabChange(2)}><Tabhead_a><BsFillTagFill /> Manage booking / Check in</Tabhead_a></Tabhead_li>
                <Tabhead_li className={tabTitle===3?'active':''} onClick={()=>TabChange(3)}><Tabhead_a><GiPlaneWing /> What's on your flight</Tabhead_a></Tabhead_li>
                <Tabhead_li className={tabTitle===4?'active':''} onClick={()=>TabChange(4)}><Tabhead_a><FaClock /> Flight status</Tabhead_a></Tabhead_li>
            </Tabhead_ul>
        </TabheadContainer>
        <TabContents>
            <TabContents_li className={tabTitle===1?'active':'content'}>
                    <Tabsearch />
            </TabContents_li> 
            <TabContents_li className={tabTitle===2?'active':'content'}>
                <Tabbooking/>
            </TabContents_li> 
            <TabContents_li className={tabTitle===3?'active':'content'}>
                <Tabaminities/>
            </TabContents_li> 
            <TabContents_li className={tabTitle===4?'active':'content'}>
                <Tabstatus/>
            </TabContents_li>  
        </TabContents>
    </TabContainer>


    </Wrapper>
  )
}

export default Tabs

//styling area

const Wrapper=styled.div`
    padding:0px 125px;
    margin-bottom: 25px;
    position: relative;
    
    @media (max-width: 680px) {
        display: none;
	}
    `;

const TabContainer=styled.section`
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 5px;
    background-color: white;
    position: relative;
`;

const TabheadContainer=styled.div`
    width: 100%;
`;

const Tabhead_ul=styled.ul`
    display: flex;
    position: absolute;
    top: -60px;
    z-index: 0;
    width: 100%;
    background-color: #fff;
`;

const Tabhead_li=styled.li`
    cursor: pointer;
    display: flex;
    justify-content: center;
    white-space: nowrap;
    width: 25%;
    list-style: none;
    border: solid #d8d8d8;
    border-width: 1px 1px 1px 0px;

    &.active{
        border-bottom: #d71921 3px solid;
        font-weight: bold;
        box-shadow: rgba(14, 14, 24, 0.1) 0px 4px 16px, rgba(3, 3, 12, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
    }

    &:hover{
        box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
    }

`;

const Tabhead_a=styled.div`
    padding: 20px 25px;
    color: #666666;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: 18px;

    ${Tabhead_li}.active &{
        color: black;
    }

`;

const TabContents=styled.ul`

`;

const TabContents_li=styled.li`
    &.content{
        display: none;
    }
    &.active{
        display:block;
    }
`;



