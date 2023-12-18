import React from 'react';
import styled from 'styled-components';

const HelpOptions = () => {
  return (
    <HelpoptionContainer>
    <HelpOption_ul>
        <HelpOption_li>
          <HelpOption_a>Help and contacts</HelpOption_a>
        </HelpOption_li>
        <HelpOption_li>
          <HelpOption_a>COVID-19  travel support</HelpOption_a>
        </HelpOption_li>
        <HelpOption_li>
          <HelpOption_a>Your questions</HelpOption_a>
        </HelpOption_li>
    </HelpOption_ul>
    <HelpOption_btn type='submit' >Search flights</HelpOption_btn>
</HelpoptionContainer>
  )
}

export default HelpOptions

//styling area

const HelpoptionContainer=styled.div`
position:absolute;
width:100%;
z-index: 1;
background: #f9f9f9;
border-bottom: 1px solid #ababab;
padding: 0px 128px;
display: flex;
justify-content: space-between;
align-items: center;
transition: .5s ease-in-out;
left: 0;
top: 55px;
`;

const HelpOption_ul=styled.ul`
display: flex;
padding: 0;
box-sizing: border-box;
padding: 0px 100px;
`;
const HelpOption_li=styled.li`
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
const HelpOption_a=styled.a`
padding:0px 10px;
font-size: 15px;
font-family: Helvetica;
color: #333;
`;
const HelpOption_btn=styled.button`
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

