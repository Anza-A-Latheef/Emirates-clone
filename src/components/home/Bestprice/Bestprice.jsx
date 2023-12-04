import React from 'react';
import Pricecard from './Pricecard';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { TfiAngleRight , TfiAngleDown } from "react-icons/tfi";

const Bestprice = () => {
  return (
    <BestpriceContainer>
        <BestpriceHead>
            <PriceHead>Featured destinations from <PriceLocation>Delhi  <ArrowIcon><TfiAngleDown /></ArrowIcon></PriceLocation></PriceHead>
            <BestpriceImage src="src\assets\images\best-price-in.svg" alt="Bestprice Logo" />
        </BestpriceHead>
            <Pricecard/>
        <BestpriceBottom>
            <BpTop>
                <Left_a>Explore more destinations<RightIcon> <TfiAngleRight /></RightIcon></Left_a>
                <ShowMore>See more fares</ShowMore>
                <Right_a>Be inspired by our route map <RightIcon> <TfiAngleRight /></RightIcon></Right_a>
            </BpTop>
            <Terms>*Terms and conditions apply</Terms>
        </BestpriceBottom>
    </BestpriceContainer>
  )
}

export default Bestprice

//styling area

const BestpriceContainer=styled.section`
    padding:50px 125px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const BestpriceHead=styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;

`;

const PriceHead=styled.h4`
    font-family: Helvetica;
    font-weight: lighter;
    font-size:20px;
    color: #333333;
`;

const PriceLocation=styled(Link)`
    color: black;
    font-weight: bold;
    cursor: pointer;
    text-decoration: 1px underline;
`;

const ArrowIcon=styled.span`
    font-size: 10px;
    color: #d71921;
`;

const BestpriceImage=styled.img`
    cursor: pointer;
    height: 40px;
    position: absolute;
    right: 0;
    top: -10px;
`;

const BestpriceBottom=styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const BpTop=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 62%;
    margin-bottom: 10px;
`;

const Left_a=styled(Link)`
    font-family: Helvetica;
    text-decoration: underline;
    font-size: 14px;

    &:hover{
        text-decoration: none;
        cursor: pointer;
    }
`;

const ShowMore=styled.button`
    font-family: Helvetica;
    font-size: 14px;
    font-weight: bold;
    background-color: white;
    color: black;
    padding: 8px 60px;
    border :1px black solid;
    border-radius: 4px;

    &:hover{
        box-shadow: 0 0 6px 0 rgba(0,0,0,.5), inset 0 0 4px #a9a9a9;
    }
`;

const Right_a=styled(Link)`
    font-family: Helvetica;
    text-decoration: underline;
    font-size: 14px;

    &:hover{
        text-decoration: none;
        cursor: pointer;
    }
`;

const RightIcon=styled(Link)`
    font-size: 10px;
`;

const Terms=styled.p`
    font-size: 14px;
`;
