import React from 'react'
import styled from 'styled-components'
import { MdKeyboardArrowRight } from "react-icons/md";
import { HiExternalLink } from "react-icons/hi";

const AboutBooking = () => {
  return (
        <ContentContainer>
            <HoverHeadContainer>
                <HoverDropHead>The Emirates App <StyledArrow /></HoverDropHead>
            </HoverHeadContainer>
            <HoverDropBody>
                <HoverDrop_ul>
                    <HoverDrop_li>
                        <HoverDropSubhead>Emirates Best Price guarantee <StyledArrow /></HoverDropSubhead>
                        <HoverDrop_a>Seat selection <StyledArrow /></HoverDrop_a>
                    </HoverDrop_li>
                </HoverDrop_ul>
                <HoverDrop_ul>
                    <HoverDrop_li>
                        <HoverDropSubhead>The Emirates App <StyledArrow /></HoverDropSubhead>
                        <HoverDrop_a>Hold my fair <StyledArrow /></HoverDrop_a>
                    </HoverDrop_li>
                </HoverDrop_ul>
            </HoverDropBody>
        </ContentContainer>
  )
}
export default AboutBooking

//styling area


const ContentContainer=styled.div`
    background-color: white;
    padding: 0px 125px 50px 125px;
    left: 0%;
    width: 100%;
    position: absolute;
    top: 51px;
    display: flex;
    flex-direction: column;
    z-index: 1;
    font-family: Helvetica;
    `;

const HoverHeadContainer=styled.div`
    border-bottom: 1px solid #ccc;
    margin:10px 90px 15px 120px;
    
`;

const HoverDropHead=styled.h3`
    font-size: 30px;
    font-weight: lighter;
    color: #333;
    display: flex;
    align-items: center;
    width: fit-content;
    line-height: 2.5;

    &:hover{
        color: #d71921;
        text-decoration: underline;
        background-color:#d9d9d9;
    }
`;

const StyledArrow=styled(MdKeyboardArrowRight)`
    font-weight: lighter;
    font-size: 13px;
    margin: 0px 5px;
`;

const HoverDropBody=styled.div`
    margin:0px 120px;
    display: flex;
    justify-content: space-between;
`;

const HoverDrop_ul=styled.ul`
    display: flex;
`;

const HoverDrop_li=styled.li`
    display: flex;
    flex-direction: column;
`;

const HoverDropSubhead=styled.h6`
    font-weight: bold;
    align-items: center;
    display: flex;
    color: #333;
    font-size: 16px;
    line-height: 2.5;

    &:hover{
        color: #d71921;
        text-decoration: underline;
    }
`;

const HoverDrop_a=styled.a`
    display: flex;
    align-items: center;
    line-height: 2.5;
    color: #333;

    &:hover{
        color: #d71921;
        text-decoration: underline;
    }
`;

const StyledLink=styled(HiExternalLink)`
    font-weight: lighter;
    color: #333;
    margin: 0px 5px;
`;

