import React from 'react';
import styled from 'styled-components';
import img from "../../assets/images/happy-family-in-winter-clothes-in-a-european-city-hp-w1920x480.jpg";

const Spotlight = () => {
  return (
    <SpotlightContainer>
        <Wrapper>
            <FlyBetter>
                <FlyBetterImage src="src\assets\images\emirates-fly-better-white.svg" alt="Fly Better" />
            </FlyBetter>
            <SpotlightHead>
                <SpotheadOne>
                    <Celebrate>Celebrate the</Celebrate>
                    <Festive>festive Season</Festive>
                </SpotheadOne>
                <SpotheadTwo>
                    <Celebrate>with thousands of Miles</Celebrate>
                    <LearnMore>Learn more</LearnMore>
                </SpotheadTwo>
            </SpotlightHead> 
        </Wrapper>
    </SpotlightContainer>
  )
}

export default Spotlight


//Styling area 

const SpotlightContainer=styled.div`
    background-image: url(${img});
    width: 100%;
    height:70vh;
    background-position: top;
    background-size: cover;

`;

const Wrapper=styled.div`
    background: linear-gradient(90deg,rgba(0,0,0,.42) 50vw,transparent calc(50vw + 1100px));
    height:70vh;
    padding:0px 125px;
    position:relative;

`;

const FlyBetter=styled.div`
    cursor: pointer;
    padding-top: 30px;
    width: 162px;
    height: 62px;
    position:absolute;
    right: 145px;
`;

const FlyBetterImage=styled.img`
    width: 100%;
`;

const SpotlightHead=styled.div`
    position: absolute;
    bottom: 100px;
    display: flex;
    flex-direction: column;
    top: 115px;
`;

const SpotheadOne=styled.div`
    float: left;
`;

const Celebrate=styled.span`
    font-family: Emirates-Medium;
    font-size: 28px;
    letter-spacing: 3px;
    color: white;
    font-style: italic;
    font-weight: bolder;
    margin-left: 15px;
`;

const Festive=styled.h2`
    font-size: 125px;
    font-family: Heroic-Medium;
    font-weight: lighter;
    letter-spacing: -7px;
    color: white;
    text-transform: uppercase;
    font-style: italic;
    line-height: 120px;
`;

const SpotheadTwo=styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    float: right;
`;

const LearnMore=styled.button`
    background-color: #d71921;
    cursor: pointer;
    color: white;
    font-size: 15px;
    font-weight:bold;
    border: none;
    padding: 11px 32px;

    &:hover{
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

`;