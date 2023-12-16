import React, { useState ,useEffect } from 'react'
import styled from 'styled-components'
import FeedbackData from '../../src/assets/feedback.json'
import { IoMdClose } from "react-icons/io";

const FeedBackPopup = () => {
    const [FbDetails,setFbDetails]=useState([]);
    useEffect(()=>{
        setFbDetails(FeedbackData,FbDetails);
    }, []);

  return (
    <FeedbackWrapper>
        <CloseButton><IoMdClose /></CloseButton>
        <FeedbackContainer>
            {FbDetails.map((content)=>(
                <Feedback key={content.id}>
                <FbImageContainer>
                    <FbImage src={`${content.image}`} alt="Feedback image" />
                </FbImageContainer>
                <FeedbackHead>{content.heading}</FeedbackHead>
                <FeedbackTitle>{content.subtitle}</FeedbackTitle>
                <FeedbackButton>{content.buttonTitle}</FeedbackButton>
            </Feedback>
            ))}
        </FeedbackContainer>
    </FeedbackWrapper>
  )
}

export default FeedBackPopup

//styling area

const FeedbackWrapper=styled.div`
    display: block;
    background-color: white;
    padding: 50px 125px;
    position: relative;
    background-color: rgba(0,0,0,0.4);
`;

const CloseButton=styled.button`
   position: absolute;
   top: 10%;
   right: 13%;
   font-size: 35px;
   font-weight: lighter;
   color: #666;
   border: none;
   background-color: transparent;
`;

const FeedbackContainer=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    display: flex;
    background-color: #F6F6F6;
    padding: 40px 0px;
    border-radius: 4px;
    box-shadow: 0 2px 10px 6px rgba(0,0,0,0.3);
    height: 100%;
    width: 100%;
    border: none;
`;

const Feedback=styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    border-right: 1px solid #ccc;
    width: 45%;
    padding:50px;
`;

const FbImageContainer=styled.div`
    display: block;
`;
const FbImage=styled.img`
    height: 68px;
    width: 81px;
`;

const FeedbackHead=styled.h2`
    font-family: 'Emirates-Medium';
    color: #333;
    font-size: 30px;
    font-weight: bold;
    line-height: 1.5;
    margin: 0;

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

const FeedbackTitle=styled.p`
    font-family: 'Helvetica';
    font-size: 15px;
    line-height: 1.5;
    margin: 16px 0 30px;
    padding-bottom: 0;
    color: #333;
`;

const FeedbackButton=styled.button`
    font-family: 'Helvetica';
    background-color: white;
    background-color: #fff;
    border: 1px solid #333;
    border-radius: 3px;
    color: #333;
    cursor: pointer;
    display: inline-block;
    font-size: 14px;
    font-weight: bold;
    line-height: normal;
    margin-bottom: 20px;
    padding: 11px;
    text-align: center;
    text-decoration: none;
    width: 100%;
`;