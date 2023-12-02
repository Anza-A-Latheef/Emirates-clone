import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { MdKeyboardArrowRight } from "react-icons/md";


export default function Tabsearch() {
  return (
    <TabsearchContainer>
        <TabsearchTop>
            <TabsearchSelect>
                <Select_ul>
                    <Select_li><Select_a>Flight</Select_a></Select_li>
                    <Select_li><Select_a>Flight + Hotel</Select_a></Select_li>
                </Select_ul>
            </TabsearchSelect>
            <AdvancedSearch>Advanced search: multi-city, promo codes, partner airlines <MdKeyboardArrowRight /></AdvancedSearch>
        </TabsearchTop>
        <TabsearchBottom>
            <AirportForm>
                <DepartureInput type="select" placeholder=" Depature Airport" />
                <ArrivalInput type="select" placeholder=" Arrival Airport" />
                <AirportSubmit>Continue</AirportSubmit>
            </AirportForm>
        </TabsearchBottom>
    </TabsearchContainer>
  )
}

//styling area

const TabsearchContainer=styled.div`
    padding: 15px 20px;
    width:100%;
    display: flex;
    flex-direction: column;
`;

const TabsearchTop=styled.div`
    display: block;
`;

const TabsearchSelect=styled.div`
    display: flex;
`;

const Select_ul=styled.ul`
    display: flex;
    border-radius: 5px;

    &:first-child{
    border: solid #666666;
    border-width: 0px 0px 0px 1px;

    }
`;

const Select_li=styled.li`
    border: solid #666666;
    border-width: 1px 1px 1px 0px;
    padding: 5px 40px;
    cursor: pointer;

    &:hover{
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
`;

const Select_a=styled(Link)`
    font-size: 15px;
    color:#333333;
`;

const AdvancedSearch=styled(Link)`
    margin: 20px 0px;
    display: flex;
    align-items: center;
    font-size: 16px;
    color: #d71921;
    float: right;
    text-decoration: underline;
    cursor: pointer;
    &:hover{
        text-decoration: none;
    }
`;

const TabsearchBottom=styled.div`
    width: 100%;
`;

const AirportForm=styled.form`
    display: flex;
    gap: 20px;
`;

const DepartureInput=styled.input`
    padding: 18px 15px;
    outline: none;
    width: 39%;
    border: 1px solid #666;
    border-radius: 5px;

    &::placeholder{
        font-size: 16px;
        color: #333;
    }

    &:hover{
        box-shadow: 0 0 6px 0 rgba(0,0,0,.5), inset 0 0 4px #a9a9a9;
    }
`;

const ArrivalInput=styled.input`
    padding: 18px 15px;
    outline: none;
    border: 1px solid #666;
    width: 39%;
    border-radius: 5px;
    
    &::placeholder{
        font-size: 16px;
        color: #333;
    }

    &:hover{
        box-shadow: 0 0 6px 0 rgba(0,0,0,.5), inset 0 0 4px #a9a9a9;
    }

`;

const AirportSubmit=styled.button`
    width: 18%;
    background-color: #d71921;
    cursor: pointer;
    color: white;
    font-size: 15px;
    font-weight:bold;
    border: none;
    padding: 20px 25px;
    border-radius: 5px;
    &:hover{
        box-shadow: 0 0 6px 0 rgba(0,0,0,.5), inset 0 0 4px #a9a9a9;
    }
`;