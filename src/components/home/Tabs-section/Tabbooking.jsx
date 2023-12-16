import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';


export default function Tabbooking() {
  return (
    <TabbookingContainer>
        <AdvancedSearch to="">Log in to view your trips</AdvancedSearch>
        <BookingForm>
            <BookingDetails type="text" placeholder="Last name" />
            <BookingDetails type="text" placeholder="Booking reference" />
            <BookingSubmit type="submit">Manage booking</BookingSubmit>
            <BookingSubmit type="submit">Check in</BookingSubmit>
        </BookingForm>
    </TabbookingContainer>
  )
}

//styling area

const TabbookingContainer=styled.div`
    padding: 15px 20px;
    width:100%;
    display: flex;
    flex-direction: column;
`;
const AdvancedSearch=styled(Link)`
    width: fit-content;
    font-family: helvetica;
    margin-bottom: 25px;
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #d71921;
    float: right;
    text-decoration: underline;
    cursor: pointer;
    &:hover{
        text-decoration: none;
        background: #f6f6f6;
    }
`;
const BookingForm=styled.form`
    display: flex;
    align-items: center;
    gap: 20px;
`;

const BookingDetails=styled.input`
    padding: 21px 15px;
    outline: none;
    width: 25%;
    border: 1px solid #666;
    border-radius: 0.3 rem;
    font-family: Helvetica;
    font-size: 12px;
    font-style: normal;
    box-shadow: inset 4px 4px 0 0 #f6f6f6;

    &::placeholder{
        font-size: 16px;
        color: #333;
    }

    &:hover{
        box-shadow: 0 0 6px 0 rgba(0,0,0,.5), inset 0 0 4px #a9a9a9;
    }
`;

const BookingSubmit=styled.button`
    width: 25%;
    background-color: #d71921;
    cursor: pointer;
    color: white;
    font-size: 15px;
    font-weight:bold;
    border: none;
    padding: 21px 15px;
    border-radius: 3px;
    &:hover{
        box-shadow: 0 0 6px 0 rgba(0,0,0,.5), inset 0 0 4px #a9a9a9;
    }
`;
