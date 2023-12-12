import React from 'react';
import styled from 'styled-components';

const FlyOptions = () => {
  return (
    <FlyoptionContainer>
        <FlyOption_ul>
            <FlyOption_li><FlyOption_a>Fly</FlyOption_a></FlyOption_li>
            <FlyOption_li><FlyOption_a>Before you fly</FlyOption_a></FlyOption_li>
            <FlyOption_li><FlyOption_a>Baggage</FlyOption_a></FlyOption_li>
            <FlyOption_li><FlyOption_a>Visa and passport</FlyOption_a></FlyOption_li>
        </FlyOption_ul>
        <FlyOption_btn type='submit' >Search flights</FlyOption_btn>
    </FlyoptionContainer>
    )
}

export default FlyOptions

//styling area

const FlyoptionContainer=styled.div`
    position:absolute;
    width:100%;
    z-index: 1;
    background: #f9f9f9;
    border-bottom: 1px solid #ababab;
    padding: 0px 128px;
    /* display: flex; */
    justify-content: space-between;
    align-items: center;
    display: none;
    transition: .5s ease-in-out;
    left: 0;
`;

const FlyOption_ul=styled.ul`
    display: flex;
    padding: 0;
    box-sizing: border-box;
    padding: 0px 100px;
`;
const FlyOption_li=styled.li`
    height: 50px;
    line-height: 50px;
    max-width: none;
    vertical-align: top;
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
    border-bottom: 1px solid transparent;
    text-align: left;

    &:hover{
        border-left: 1px solid #ababab;
        border-right: 1px solid #ababab;
        background-color: white;
    }
`;
const FlyOption_a=styled.a`
    padding:0px 7px;
    font-size: 15px;
    font-family: Helvetica;
    color: #333;
`;
const FlyOption_btn=styled.button`
    cursor: pointer;
	display: flex;
    height: 35px;
	align-items: center;
	justify-content: center;
	background: #d71921;
    border-radius:3px;
	color: white;
	border: none;
	font-size:14px;
	font-family: Helvetica;
	padding: 0px 10px;

    &:hover{
        box-shadow: rgba(80, 77, 77, 0.35) 0px 5px 15px;

    }

`;


