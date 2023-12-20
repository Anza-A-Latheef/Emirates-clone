import React from 'react'
import styled from 'styled-components'
import { MdKeyboardArrowRight } from "react-icons/md";
import { HiExternalLink } from "react-icons/hi";


const HelpContent = () => {
  return (
        <ContentContainer>
            <HoverHeadContainer>
                <HoverDropHead>Help and Contacts <StyledArrow /></HoverDropHead>
            </HoverHeadContainer>
            <HoverDropBody>
                <HoverDrop_ul>
                    <HoverDrop_li>
                        <HoverDropSubhead>Help and Contacts <StyledArrow /></HoverDropSubhead>
                        <HoverDrop_a> Changing or Cancelling<StyledArrow /></HoverDrop_a>
                        <HoverDrop_a>Visa and passport help <StyledArrow /></HoverDrop_a>
                        <HoverDrop_a>Feedback and complaints <StyledArrow /></HoverDrop_a>
                        <HoverDrop_a>Checking your travel requirements <StyledArrow /></HoverDrop_a>
                    </HoverDrop_li>
                </HoverDrop_ul>
                <HoverDrop_ul>
                    <HoverDrop_li>
                        <HoverDrop_a> Keeping your tickets or refunds<StyledArrow /></HoverDrop_a>
                        <HoverDrop_a>Delayed or damaged baggage support<StyledArrow /></HoverDrop_a>
                        <HoverDrop_a>Lost property <StyledArrow /></HoverDrop_a>
                        <HoverDrop_a>Dubai Connect <StyledArrow /></HoverDrop_a>
                    </HoverDrop_li>
                </HoverDrop_ul>
                <HoverDrop_ul>
                    <HoverDrop_li>
                        <HoverDropSubhead>Changes to our operations <StyledArrow /></HoverDropSubhead>
                        <HoverDrop_a>Recent travel Updates <StyledArrow /></HoverDrop_a>
                        <HoverDrop_a>Check your flight status <StyledArrow /></HoverDrop_a>
                    </HoverDrop_li>
                </HoverDrop_ul>
                <HoverDrop_ul>
                    <HoverDrop_li>
                        <HoverDropSubhead>Special assistance <StyledArrow /></HoverDropSubhead>
                        <HoverDrop_a>Accessible travel with Emirates <StyledArrow /></HoverDrop_a>
                        <HoverDrop_a>Special assistance and requests <StyledArrow /></HoverDrop_a>
                    </HoverDrop_li>
                </HoverDrop_ul>
            </HoverDropBody>
        </ContentContainer>
      )
    }
    
    export default HelpContent
    
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
        z-index: 2;
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

