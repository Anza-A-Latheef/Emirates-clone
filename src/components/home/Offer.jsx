import React from 'react';
import styled from 'styled-components';
import img from "../../assets/images/offer.avif";

export default function Offer() {
  return (
    <OfferContainer>
        <Wrapper>
            <Offertitle>special offer for students</Offertitle>
            <OfferHead>Students enjoy discounts and extras with us</OfferHead>
            <OfferSubhead>Book your travels with Emirates to enjoy special discounts, extra baggage allowance and more</OfferSubhead>
            <OfferButton>Learn more</OfferButton>
        </Wrapper>
    </OfferContainer>
  ) 
}

//styling area

const OfferContainer=styled.section`
    background-image: url(${img});
    width: 100%;
    background-position: top;
    background-size: cover;
`;
const Wrapper=styled.div`
    background: linear-gradient(90deg,rgba(0,0,0,.42) 50vw,transparent calc(50vw + 1100px));
    height:70vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 80px;
`;
const Offertitle=styled.h6`
    font-family: 'Dhurjati';
    text-transform: uppercase;
    font-size: 14px;
    font-weight: lighter;
    letter-spacing: .3rem;
    color: white;
    opacity: .69;
    text-shadow: 0.1rem 0.1rem 0 rgba(0,0,0,.5);
    line-height: 1.15;

`;

const OfferHead=styled.h2`
    font-family: 'Emirates-Medium';
    font-size: 50px;
    color: white;

    &::after{
        content: "";
        position: relative;
        display: block;
        background-color: #d71921;
        width: 60px;
        height: 2px;
        margin: auto;
        margin-bottom: 8px;
    }
`;

const OfferSubhead=styled.p`
    font-family: helvetica;
    font-size: 14px;
    color: #ffffff;
`;

const OfferButton=styled.button`
    margin-top: 150px;
    font-family: Helvetica;
    font-size: 15px;
    font-weight: 700;
    background: #fff;
    color: #333;
    border: 1px solid #333;
    border-radius: 2px;
    text-align: center;
    padding: 10px 20px;

    &:hover{
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        cursor: pointer;
    }
`;
