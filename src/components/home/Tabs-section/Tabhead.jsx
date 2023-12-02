import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { GiCommercialAirplane } from "react-icons/gi";
import { BsFillTagFill } from "react-icons/bs";
import { GiPlaneWing } from "react-icons/gi";
import { FaClock } from "react-icons/fa";

const Tabhead = () => {
  return (
    <TabheadContainer>
        <Tabhead_ul>
            <Tabhead_li><Tabhead_a><GiCommercialAirplane /> Search Flights</Tabhead_a></Tabhead_li>
            <Tabhead_li><Tabhead_a><BsFillTagFill /> Manage booking / Check in</Tabhead_a></Tabhead_li>
            <Tabhead_li><Tabhead_a><GiPlaneWing /> What's on your flight</Tabhead_a></Tabhead_li>
            <Tabhead_li><Tabhead_a><FaClock /> Flight status</Tabhead_a></Tabhead_li>
        </Tabhead_ul>
    </TabheadContainer>
  )
}

export default Tabhead

// styling area 

const TabheadContainer=styled.div`
    width: 100%;
`;

const Tabhead_ul=styled.ul`
    display: flex;
    height: 60px;
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

    &:hover{
        box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
    }

`;

const Tabhead_a=styled(Link)`
    color: #666666;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: 18px;
`;
