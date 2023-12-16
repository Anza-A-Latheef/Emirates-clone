import React from 'react';
import styled from 'styled-components';


export default function Tabaminities() {
  return (
    <AminitiesContainer>
        <AminitiesTop>
            <AminitiesForm>
                <AminitiesInput type="radio" id="route"  name="RadioName" defaultChecked="true"/>
                <AminitiesLabel>Route</AminitiesLabel>
                <AminitiesInput type="radio" id="flight number" name="RadioName"/>
                <AminitiesLabel>Flight number</AminitiesLabel>
            </AminitiesForm>
        </AminitiesTop>
        <AminitiesBottom>
            <AirportForm>
                <AirportInput type="text" placeholder="Departure airport" />
                <AirportInput type="text" placeholder="Arrival airport" />
                <AirportInput type="text" placeholder="Departing" />
                <SeeWhat>See what's on</SeeWhat>
            </AirportForm>
        </AminitiesBottom>
    </AminitiesContainer>
  )
}


//styling area 

const AminitiesContainer=styled.div`
    padding: 15px 20px;
    width:100%;
    display: flex;
    flex-direction: column;
`;
const AminitiesTop=styled.div`
    display: block;
    margin: 15px;
`;

const AminitiesForm=styled.form`
    display: flex;
    align-items: center;
`;

const AminitiesInput=styled.input`
padding: 10px;
    width: 20px;
    height: 20px;
    cursor: pointer;
    font-size: 10px;
    margin: 5px;
    accent-color: #d71921;


`;

const AminitiesLabel=styled.label`
    font-family: Helvetica;
    font-size:15px;

`;

const AminitiesBottom=styled.div`
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