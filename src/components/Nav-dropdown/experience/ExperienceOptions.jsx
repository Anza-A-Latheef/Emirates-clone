import React from 'react';
import ExperienceContent from './ExperienceContent'
import EmiratesExp from './EmiratesExp'
import Family from './Family'
import FlyBetter from './FlyBetter'
import About from './About'
import styled from 'styled-components';


const ExperienceOptions = () => {
  return (
    <ManageoptionContainer>
    <ManageOption_ul>
        <ManageOption_li>
            <ManageOption_a>Inflight Experience</ManageOption_a>
                <ManageWrapper>
                    <ExperienceContent/>
                </ManageWrapper>
        </ManageOption_li>
        <ManageOption_li>
            <ManageOption_a>The Emirates Experience</ManageOption_a>
                <ManageWrapper>
                    <EmiratesExp/>
                </ManageWrapper>
        </ManageOption_li>
        <ManageOption_li>
            <ManageOption_a>Family travel</ManageOption_a>
                <ManageWrapper>
                    <Family/>
                </ManageWrapper>
        </ManageOption_li>
        <ManageOption_li>
            <ManageOption_a>Fly Better</ManageOption_a>
                <ManageWrapper>
                    <FlyBetter/>
                </ManageWrapper>
        </ManageOption_li>
        <ManageOption_li>
            <ManageOption_a>About us</ManageOption_a>
                <ManageWrapper>
                    <About/>
                </ManageWrapper>
        </ManageOption_li>
    </ManageOption_ul>
    <ManageOption_btn type='submit' >Search flights</ManageOption_btn>
</ManageoptionContainer>
)

}

export default ExperienceOptions

//styling area

const ManageoptionContainer=styled.div`
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

const ManageOption_ul=styled.ul`
display: flex;
padding: 0;
box-sizing: border-box;
padding: 0px 100px;
`;
const ManageOption_li=styled.li`
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
const ManageOption_a=styled.a`
padding:0px 10px;
font-size: 15px;
font-family: Helvetica;
color: #333;
`;

const ManageWrapper=styled.div`
    display: none;

    ${ ManageOption_li }:hover & {
        display: flex;
        margin: 200px 0;
    }
`;
const ManageOption_btn=styled.button`
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

