import React from 'react';
import styled from 'styled-components';
import ExpContent from './exp-content';
import img from "../../../assets/images/seafood-meal-first-class-black-and-white-d1920x1159.jpg";

const Experience = () => {
  return (
    <ExpContainer>
        <Wrapper>
            <ExpTop>
                <ExpTitle>flying with emirates</ExpTitle>
                <ExpHead>Make it an incredible journey</ExpHead>
                <ExpsubTitle>Explore the Emirates experience and plan an unforgettable trip beyond your flight.</ExpsubTitle>
            </ExpTop>
            <ExpBottom>
                <ExpContent/>
            </ExpBottom>
        </Wrapper>
    </ExpContainer>
  )
}

export default Experience

//styling area

const ExpContainer=styled.section`
    background-image: url(${img});
    width: 100%;
`;

const Wrapper=styled.div`
    padding: 0px 125px;
`;

const ExpTop=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0px 60px 0px;
`;

const ExpTitle=styled.h6`
    font-family: 'Dhurjati';
    text-transform: uppercase;
    font-size: 13.5px;
    font-weight: lighter;
    letter-spacing: .3rem;
    color:#666666;
    line-height: 1.15;
`;

const ExpHead=styled.h2`
    font-family: 'Emirates-Medium';
    color: #333333;
    font-size: 52px;
    line-height: 5.75rem;
`;

const ExpsubTitle=styled.p`
    font-family: Helvetica;
    font-size: 14px;
    line-height: 1.61rem;
    font-weight: 200;
    color: #666;
`;

const ExpBottom=styled.div``;