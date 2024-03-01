import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import {FaGlobeEurope} from 'react-icons/fa' 
import { VscTriangleDown } from "react-icons/vsc";
import logobadge from '../../../src/assets/images/emirates-logo-badge.svg';
import { useParams } from 'react-router-dom';
import LoadingPage from '../LoadingPage';
import Flights from './Flights';
import Passengers from './Passengers';
import Options from './Options';
import Payment from './Payment';
import Confirm from './Confirm';

const SearchPage = () => {
    const [sectionTitle,setSectionTitle]=useState(1);
 
    const handleContinue = () => {
        if (sectionTitle < 5) {
          const nextSection = sectionTitle + 1;
          setSectionTitle(nextSection);
        } else {
          console.log('Booking process completed');
        }
      };
    const {departure,arrival ,totalPassenger,classes} = useParams();
    const [loading,setLoading]= useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
                setLoading(false)
            }, 2000);
        }, [departure, arrival, totalPassenger, classes]);

    return (
    <>
        {loading ?(<LoadingPage/>):(
            <>
                <SearchHead>
                    <LogoCont>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 54"><path fill="#fff" d="M25.9 36.2h-5.2c-1.6 0-1.5-1.4-1.6-2.5v-7.5h2.4c1.4 0 3.2-.2 5 .8 0 0-1.3-3-5-3h-2.4v-2.4s0-2.1-.5-2.7H22c3 0 5.3-.1 7.7 1.5 0 0-.4-3.9-6.2-3.9H12.2s2 1.7 1.9 5.1l.1 13.6c0 3.4 1.3 3.5 1.3 3.5h11.1c2.5 0 3.4-1.8 3.4-2.7v-1.3c0-.1-.7 1.5-4.1 1.5m29.4-1.1v-9.5c0-3.7-3-4.7-5.3-4.7-3 0-3.9 2.5-4.2 3.3-.7-2.3-3-3.4-4.9-3.4-3.5 0-4.5 3.4-4.5 3.4s-.1-3.3-3-3.3h-2.8s1.6.7 1.6 3.5v10.5c0 3.5 1.4 3.5 1.4 3.5h4.7c-.1 0-1.8-1.3-1.8-3.6v-9.3c.1-.4.8-1.8 2.8-1.8 1.1 0 2.4 1.2 2.3 2.5v8.7c0 3.5 1.4 3.5 1.4 3.5h4.7s-1.8-1.3-1.8-3.6v-9.3c.2-.5.8-1.8 2.6-1.8 1.4 0 2.5 1.2 2.5 2.5v8.7c0 3.5 1.4 3.5 1.4 3.5h4.7s-1.8-1-1.8-3.3m8.2 0c0 2.3 1.8 3.5 1.8 3.5h-4.7s-1.4 0-1.4-3.5V24.5c0-2.8-1.6-3.5-1.6-3.5h2.8c1 0 3.1 0 3.1 3.9v10.2zm14.3-12.7s-.5-1.3-2.3-1.3c-3 0-3.7 3.5-3.7 3.5-.2-2.7-.9-3.6-3-3.6H66s1.6.7 1.6 3.5v10.6c0 3.5 1.4 3.5 1.4 3.5h4.6c-.1 0-1.8-1.3-1.8-3.6v-8.6c.1-.8.5-1.4 1.2-1.8 1.6-1 3.6-.7 4.8.7v-2.9zm21.7.6a6 6 0 0 1 2.8.7V21h-3.9v-4s-1 1.8-3.1 3.5a24 24 0 0 1-4.1 2.4l2.9.1v12.2c0 3.4 1.5 3.4 1.5 3.4h4.6s-1.8-1.2-1.8-3.4V23h1.1m11.3 4.2c.8-1.4 1.4-5.1-1.3-4.9-3 .2-2.4 8.4-2.4 8.4 1-1.1 2.5-1.3 3.7-3.5m2.9 1.1c-2.7 2.7-4.7 2.3-6.3 4.3 0 0 .3 2.7 2.3 3.7.7.3 3.6 1.2 5.5-2v3.1s-1.2 1.3-5 1.3c-4.5 0-7.6-3.6-7.6-8.5 0-4.8 2.5-9.2 7.3-9.3 4.6 0 7.2 3.8 3.8 7.4m-52.4-8.7c1.2 0 2.2-.9 2.2-2.1 0-1.2-1-2.1-2.2-2.1-1.2 0-2.1 1-2.1 2.1a2 2 0 0 0 2.1 2.1m62.6 14.3c0 1.2-1.1 2.9-3.5 2.9-2.3 0-3.3-2.5-3.3-2.5v3.2s1.8 1.2 4.4 1.2c3.2 0 6.4-2.4 6.3-5.8 0-1.2-.5-2.2-1.1-3.1-1.1-1.4-3-2.5-4.6-3.4-2.1-1.2-1.8-3.8 1.3-3.6 2.3.2 3.3 2.4 3.3 2.4v-2.9s-1.7-1.4-4.5-1.4-5.3 1.9-5.2 4.2c.1 2.1.9 3.5 2.6 4.7.7.5 1.4 1 2.4 1.5 1.4.8 1.9 1.7 1.9 2.6m-38.1-9c0 1.7-1.5 2.5-2.5 2.9-2.7 1.2-6.3 2.6-6.3 6.6 0 2.7 2 4.3 4.8 4.3 2.1 0 3.2-1.1 3.7-2.1.3 2 1.3 2.1 1.3 2.1h4.6s-1.8-1.2-1.8-3.5v-9.9c0-2.4-2.6-4.2-5.4-4.2-2.6 0-4.3 1.3-4.3 1.3v3.1s1-2.4 3.3-2.4c2-.2 2.6.8 2.6 1.8m-2.6 11.7c-1.4 0-2.4-.8-2.4-2.5 0-4 3.6-4.8 4.6-5.9v7.4c-.1 0-.7 1-2.2 1"/></svg>
                    </LogoCont>
                    <RightBox>
                        <Button><FaGlobeEurope /> IN <Arrow_icon><VscTriangleDown /></Arrow_icon></Button>
                    </RightBox>
                </SearchHead>
                <AirportSummary>
                    <SummaryLeft>
                        <Detail>{departure} to {arrival} </Detail>
                        <Detail>Return • {totalPassenger} passengers • <DetailSpan>Change search</DetailSpan></Detail>
                    </SummaryLeft>
                    <SummaryButton>View Summary</SummaryButton>
                </AirportSummary>
                <BookStatus>
                    <BookHeading>Make a booking</BookHeading>
                    <BookSectionDiv>
                        {[1, 2, 3, 4, 5].map((number) => (
                        <BookSection key={number} className={sectionTitle >= number ? 'active' : ''}>
                            <StatusNo>{number}</StatusNo>
                            <Statusname>
                                {number === 1 && 'Flights'}
                                {number === 2 && 'Passengers'}
                                {number === 3 && 'Options'}
                                {number === 4 && 'Payment'}
                                {number === 5 && 'Confirm'}
                            </Statusname>
                        </BookSection>))}
                    </BookSectionDiv>
                </BookStatus>
                <SummaryBody>
                    <SectionContent className={sectionTitle===1?'active':'content'}>
                        <Flights/>
                        <ContinueButtonCont>
                            <ContinueButton onClick={handleContinue}>Continue to passengers</ContinueButton>
                        </ContinueButtonCont>
                    </SectionContent>
                    <SectionContent className={sectionTitle===2?'active':'content'}>
                        <Passengers totalPassengers={totalPassenger}/>
                        <ContinueButtonCont>
                            <ContinueButton onClick={handleContinue}>Continue to Options</ContinueButton>
                        </ContinueButtonCont>
                    </SectionContent>
                    <SectionContent className={sectionTitle===3?'active':'content'}>
                        <Options/>
                        <ContinueButtonCont>
                            <ContinueButton onClick={handleContinue}>Continue to Payment</ContinueButton>
                        </ContinueButtonCont>
                    </SectionContent>
                    <SectionContent className={sectionTitle===4?'active':'content'}>
                        <Payment/>
                        <ContinueButtonCont>
                            <ContinueButton onClick={handleContinue}>Continue to Confirm</ContinueButton>
                        </ContinueButtonCont>
                    </SectionContent>
                    <SectionContent className={sectionTitle===5?'active':'content'}>
                        <Confirm/>
                    </SectionContent>
                </SummaryBody>
                <SearchFooter>
                    <FooterTop>
                        <Footer_p>Book a flight</Footer_p>
                        <Footer_p>Manage a booking</Footer_p>
                        <Footer_p>Online check-in</Footer_p>
                    </FooterTop>
                    <FooterBottom>
                        <FooterCopyright>© 2024 The Emirates Group. All rights reserved.</FooterCopyright>
                        <Footer_p>Accessibility</Footer_p>
                        <Footer_p>Contact us</Footer_p>
                        <Footer_p>Privacy policy</Footer_p>
                        <Footer_p>Terms and conditions</Footer_p>
                    </FooterBottom>
                    <LogoEnd>
                        <LogoEndImage src ={logobadge} alt="Emirates Logo"/>
                    </LogoEnd>
                </SearchFooter>
            </>)
        }
    </>
)}

export default SearchPage;

const SearchHead=styled.div`
    background-color: #333;
    display: flex;
    justify-content: space-between;
    padding-inline: 125px;
`;

const LogoCont=styled.div`
    cursor: pointer;
	background:#d71921;
	width:125px;
	height:56px;
	display: flex;
	align-items:end;
	padding-bottom: 5px;
	box-sizing: border-box;
`;

const RightBox=styled.div`
    display: flex;
	padding: 0px 10px;
`;

const Button=styled.div`
    cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	background: transparent;
	color: white;
	border: none;
	font-size:14px;
	font-weight: bolder;
	font-family: Helvetica;
	letter-spacing: 0.5px;
	gap: 8px;
	padding: 20px 10px;
	text-decoration: none;
	&:hover{
		background-color:#212121;
	}
`;

const Arrow_icon=styled.div`
    position:absolute;
	bottom : 5px;
	display: none;
	flex-direction: column;
	align-items: center;
	font-size:10px;
	color: gray;

	${ Button }:hover & {
		display: flex;
	}
`;

const AirportSummary=styled.div`
    position: sticky;
    width: 100%;
    top: 0;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    padding: 12px 125px;
`;

const SummaryLeft=styled.div`

`;

const Detail=styled.p`
    color: #333;
    letter-spacing: .02em;
    height: 20px;
    font-size: 15px;
`;

const DetailSpan=styled.span`
    text-decoration: underline;
    color: #d71921;
    cursor: pointer;
    font-weight: lighter;
`;

const SummaryButton=styled.button`
    background-color: #d71921;
    color: white;
    height: max-content;
    font-size: 18px;
    padding: 20px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    border-radius: 5px;
`;


const SearchFooter=styled.div`
    background-color: #333;
    padding: 0px 125px;
    position: relative;
`;

const FooterTop=styled.div`
    border-bottom: 1px solid #666;
    display: flex;
`;

const Footer_p=styled.p`
    color: #fff;
    font-size: 14px;
    text-decoration: underline;
    padding: 20px 20px 20px 0px;
`;

const FooterBottom=styled.div`
    display: flex;
    align-items: center;
`;

const FooterCopyright=styled.p`
    color: #fff;
    font-size: 14px;
    margin-right: 20px;
`;

const LogoEnd=styled.div`
    cursor: pointer;
	background:#d71921;
	width:70px;
	height:90px;
	position:absolute;
	bottom: 0;
    right: 26px;
	display: flex;
	align-items:end;
	z-index: 11;
	padding-bottom: 5px;
	box-sizing: border-box;

`;

const LogoEndImage=styled.img`
    width:100%;
    position: absolute;
    top: 10px;
`;

const SummaryBody=styled.div`
    background-color: #fbfbfb;
    padding: 10px 125px;
    `;

const BookStatus=styled.div`
    padding-block: 30px;
    padding-inline: 125px;
    display: block;
    background-color: #fbfbfb;
`;

const BookHeading=styled.h2`
    font-family: 'Emirates-Medium';
    color: #333;
    font-size: 32px;
`;


const BookSectionDiv=styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`;

const BookSection=styled.div`
    display: flex;
    align-items: center;
    width: 200px;
    border-bottom: 5px solid #ccc;

    &.active{
        border-bottom: #333 5px solid;
    }
`;

const SectionContent=styled.div`
    &.content{
        display: none;
    }
    &.active{
        display:block;
    }
`;

const StatusNo=styled.h2`
    font-size: 45px;
    color: #666;
    ${BookSection}.active &{
        color: #c60c30;;
    }
`;

const Statusname=styled.h6`
    color: #666;
    font-size: 16px;
    margin-left: 10px;
    font-weight: lighter;
    ${BookSection}.active &{
        color: #333333;
        font-weight: bold;
    }

`;

const ContinueButton=styled.button`
    background-color: #c60c30;
    color: white;
    font-size: 18px;
    padding: 10px 20px;
    outline: none;
    border: none;
    border-radius: 3px;
    font-weight: bold;
`;
const ContinueButtonCont=styled.div`
    display: flex;
    align-items: end;
    justify-content: end;
    width: 100%;
`;