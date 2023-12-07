import React from 'react';
import styled from 'styled-components';


export default function Tabstatus() {
  return (
    <StatusContainer>
       <StatusTop>
            <StatusForm>
                <StatusInput  checked type="radio" id="route"  name="RadioName"/>
                <StatusLabel for="route">Route</StatusLabel>
                <StatusInput type="radio" id="flight number" name="RadioName"/>
                <StatusLabel for="flight number">Flight number</StatusLabel>
            </StatusForm>
            <DayStatus>
                <Travel>
                    <TravelStatus  checked type="radio" id="departure"  name="RadioName"/>
                    <TravelLabel for="departure">Departure day</TravelLabel>
                </Travel>
                <Travel>
                    <TravelStatus type="radio" id="arrival" name="RadioName"/>
                    <TravelLabel for="arrival">Arrival day</TravelLabel>
                </Travel>
            </DayStatus>
        </StatusTop>
        <StatusBottom>
            <AirportForm>
                <AirportInput type="text" placeholder="Departure airport" />
                <AirportInput type="text" placeholder="Arrival airport" />
                <AirportInput type="text" placeholder="Date" />
                <SeeWhat>Check status</SeeWhat>
            </AirportForm>
        </StatusBottom>
    </StatusContainer>
    )
}

//styling area

const StatusContainer=styled.div`
    padding: 15px 20px;
    width:100%;
    display: flex;
    flex-direction: column;
`;
const StatusTop=styled.div`
    display: flex;
    justify-content: space-between;
    margin: 15px;
`;

const StatusForm=styled.form`
    display: flex;
    align-items: center;
`;

const StatusInput=styled.input`
padding: 10px;
    width: 20px;
    height: 20px;
    cursor: pointer;
    font-size: 10px;
    margin: 5px;
    accent-color: #d71921;


`;

const StatusLabel=styled.label`
    font-family: Helvetica;
    font-size:15px;

`;

const Travel=styled.div`
    display: flex;
    justify-content: center;
    margin-right: 10px;
    align-items: center;
    border-radius: 30px;
    padding: 5px  30px;
    border:1px solid #666;
    /* border:1px solid #d71921; */

    &:first-child{
        border:1px solid #d71921; 
        color: #d71921;
        font-weight: bold;
    }
`;

const StatusBottom=styled.div`
    display: block;
`;

const AirportForm=styled.form`
    display: flex;
    width: 100%;
    gap:20px;
`;

const AirportInput =styled.input`
    outline: none;
    padding:23px 20px;
    width: 25%;
    box-shadow: inset 0.4rem 0.4rem 0 0 #f6f6f6;
    border: 1px solid #666;
    border-radius: 3px;
    &:hover{
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    }
    &::placeholder{
        font-family: Helvetica;
        font-size: 15px;
        color: #333;
    }
`;

const SeeWhat=styled.button`
    flex-wrap:nowrap;
    font-family: Helvetica;
    font-size: 16px;
    padding:10px 20px;
    width: 20%;
    font-weight: bolder;
    background-color: #d71921;
    border-radius: 3px;
    color: white;
    border: none;
`;

const DayStatus=styled.div`
    display: flex;
`;

const TravelStatus=styled.input`
    opacity: 0;
`;

const TravelLabel=styled.label`


`;