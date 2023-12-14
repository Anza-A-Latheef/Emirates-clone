import React from 'react'
import styled from 'styled-components'

const Loghead = () => {
  return (
    <LogheadContainer>
        <LogTitle>Log in to Emirates</LogTitle>
        <LogSubtitle>Earn Miles every time you fly with us and our partners. And spend your Skywards Miles on a world of rewards.</LogSubtitle>
    </LogheadContainer>
  )
}

export default Loghead

//styling area

const LogheadContainer=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 125px;
    max-width: 1100px;
    margin: 40px auto;
    line-height: 3.9rem;
    padding-top: 15px;
`;

const LogTitle=styled.h2`
    text-align: center;
    font-family: 'Emirates-Medium';
    font-size: 3rem;
    color: #333;
    font-weight: bold;
    letter-spacing: 1px;
`;
const LogSubtitle=styled.h6`
    text-align: center;
    color: #333;
    font-family: Helvetica;
    margin: 20px 124px;
    font-weight: lighter;
    letter-spacing: 0.5px;
    font-size: 1.3rem;
    line-height: 1.4rem;
`;