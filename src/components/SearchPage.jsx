import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import {FaGlobeEurope} from 'react-icons/fa' 
import { VscTriangleDown } from "react-icons/vsc";
import logobadge from '../../src/assets/images/emirates-logo-badge.svg';
import { useParams } from 'react-router-dom';
import LoadingPage from './LoadingPage';
import FlightDetail from '../assets/FlightDetail.json'

const SearchPage = () => {
const {departure,arrival ,totalPassenger,classes,departureDate,returnDate} = useParams();
const [loading,setLoading]= useState(false);
const [emiratesFlight,setEmiratesFlight]=useState([]);
useEffect(() => {
    setLoading(true);
    setTimeout(() => {
        const filteredFlights = FlightDetail.filter(flight => {
            return (
                flight.departure_place.includes(departure.slice(0, -6)) &&
                flight.arrival_place.includes(arrival.slice(0, -6))
            );
        });
        setEmiratesFlight(filteredFlights);
        setLoading(false);
    }, 100);
}, [departure, arrival]);


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
                <SummaryBody>
                    <BookStatus>
                        <BookHeading>Make a booking</BookHeading>
                        <BookSectionDiv>
                            <BookSection>
                                <StatusNoActive>1</StatusNoActive>
                                <StatusnameActive>Flights</StatusnameActive>
                            </BookSection>
                            <BookSection>
                                <StatusNo>2</StatusNo>
                                <Statusname>Passengers</Statusname>
                            </BookSection>
                            <BookSection>
                                <StatusNo>3</StatusNo>
                                <Statusname>Options</Statusname>
                            </BookSection>
                            <BookSection>
                                <StatusNo>4</StatusNo>
                                <Statusname>Payment</Statusname>
                            </BookSection>
                            <BookSection>
                                <StatusNo>5</StatusNo>
                                <Statusname>Confirm</Statusname>
                            </BookSection>
                        </BookSectionDiv>
                    </BookStatus>
                    <CurencyConverter>
                        <CurrencyImage  src="https://fly4.ekstatic.net/Images/nld.png" />
                        <CurrencyBody>You are viewing prices in <CurrSpan>INR.</CurrSpan>. If you would like to view prices in another currency you can change it from the dropdown menu. The online exchange rates provided are indicative and intended as a guide only. Final payment will be completed in <CurrSpan>INR.</CurrSpan></CurrencyBody>
                        <ConverterInput placeholder="Currency Converter"/>
                    </CurencyConverter>
                    <PriceSection>
                        <LowPrice>Lowest price for all passengers</LowPrice>
                        <FlightFare>INR 350,194</FlightFare>
                        <FareDetails>This price is the lowest available price combination for your selected dates. Look for the lowest price indicator in the results below to get this price. All prices below include airfare, taxes, fees and carrier-imposed charges for {totalPassenger} passengers.</FareDetails>
                    </PriceSection>
                    <FairConditions>Please ensure you read the <u> fare conditions</u> at the bottom before selecting your flights.</FairConditions>
                    <FlightDetails>
                        <OutboundDetails>
                            <Outbound>Outbound, {departure.slice(0,-5)} to {arrival.slice(0,-5)}</Outbound>
                            <OutboundDate>{departureDate}</OutboundDate>
                            {emiratesFlight && emiratesFlight.map((flight, index) => (
                            <Flightbox key={index}>
                                <TravelData >
                                    <FlightCode>
                                    <EmiritesFlag alt="" src="https://fly4.ekstatic.net/media/icn_tail_EK_tcm223-154219.svg"/>
                                        <FlagCode>
                                            <Code>B777</Code>
                                            <Code>EK{flight.flight_code}</Code>
                                        </FlagCode>
                                    </FlightCode>
                                    <FlightData>
                                        <AirportTime>
                                        <AirportCode>{flight.departure}</AirportCode>
                                            <FlightTime>{flight.departure_time}</FlightTime>
                                        </AirportTime>
                                        <FlightDuration>
                                            <TravelDetail>{flight.travel_time}</TravelDetail>
                                            <FlightTrackImg>
                                                <FlightImage alt="" src="https://fly4.ekstatic.net/Images/farebrand_refresh/flight@2x.png"/>
                                            </FlightTrackImg>
                                            <TravelDetail><u>1 connection</u></TravelDetail>
                                        </FlightDuration>
                                        <AirportTime>
                                        <AirportCode>{flight.arrival}</AirportCode>
                                            <FlightTime>{flight.arrival_time}</FlightTime>
                                        </AirportTime>
                                    </FlightData>
                                </TravelData>
                                <FairData>
                                    <SelectedClass>{classes}</SelectedClass>
                                    <SelectedClassFair>
                                    <ClassFair>from INR</ClassFair>
                                                <ClassFairInr>1235566</ClassFairInr>
                                    </SelectedClassFair>
                                </FairData>
                            </Flightbox>
                            ))}
                        </OutboundDetails>
                        <OutboundDetails>
                            <Outbound>Inbound, {arrival.slice(0,-5)} to {departure.slice(0,-5)}</Outbound>
                            <OutboundDate>{returnDate}</OutboundDate>
                            {emiratesFlight && emiratesFlight.map((flight, index) => (
                                <Flightbox key={index}>
                                    <TravelData>
                                        <FlightCode>
                                            <EmiritesFlag alt="" src="https://fly4.ekstatic.net/media/icn_tail_EK_tcm223-154219.svg"/>
                                            <FlagCode>
                                                <Code>B777</Code>
                                                <Code>EK{flight.flight_code}</Code>
                                            </FlagCode>
                                        </FlightCode>
                                        <FlightData>
                                            <AirportTime>
                                            <AirportCode>{flight.arrival}</AirportCode>
                                                <FlightTime>{flight.arrival_time}</FlightTime>
                                            </AirportTime>
                                            <FlightDuration>
                                                <TravelDetail>{flight.travel_time}</TravelDetail>
                                                <FlightTrackImg>
                                                    <FlightImage alt="" src="https://fly4.ekstatic.net/Images/farebrand_refresh/flight@2x.png"/>
                                                </FlightTrackImg>
                                                <TravelDetail><u>1 connection</u></TravelDetail>
                                            </FlightDuration>
                                            <AirportTime>
                                            <AirportCode>{flight.departure}</AirportCode>
                                                <FlightTime>{flight.departure_time}</FlightTime>
                                            </AirportTime>
                                        </FlightData>
                                    </TravelData>
                                <FairData>
                                    <SelectedClass>{classes}</SelectedClass>
                                    <SelectedClassFair>
                                        <ClassFair>from INR</ClassFair>
                                        <ClassFairInr>1234557</ClassFairInr>
                                    </SelectedClassFair>
                                </FairData>
                            </Flightbox>
                        ))}
                        </OutboundDetails>
                    </FlightDetails>
                    <FairSummary>
                        <FairHead>Fare conditions</FairHead>
                        <FairPoints>• Note: Upgrade prices and seat selection are only applicable to Emirates operated flights.</FairPoints>
                        <FairPoints>• View our <u>Emirates seat selection rules and rates.</u></FairPoints>
                        <FairPoints>• <b>Important:</b> Change fees will be charged in addition to any applicable fare difference.<br/>The amounts quoted for refunds, change fees, Miles earned or upgrades are per person. Upgrades with Miles are subject to availability on Emirates operated flights only.</FairPoints>
                    </FairSummary>
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
  )
}

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

const FairSummary=styled.div`
    display: block;
    background: #f7f7f7;
    margin: 60px 0px;
`;

const FairHead=styled.h6`
    font-weight: bold !important;
    font-family: Arial,sans-serif !important;
    font-size: 14px;
    color:#333;
`;

const FairPoints=styled.p`
    font-size: 15px;
    color:#666666;
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
    background-color: #f7f7f7;
    padding: 10px 125px;
`;

const BookStatus=styled.div`
    display: block;
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
`;

const StatusNoActive=styled.h2`
    font-size: 45px;
    color: #c60c30;
`;

const StatusnameActive=styled.h6`
    font-size: 16px;
    color: #333;
    margin-left: 10px;
    font-weight: lighter;
`;

const StatusNo=styled.h2`
    font-size: 45px;
    color: #666;
`;

const Statusname=styled.h6`
    color: #666;
    font-size: 16px;
    margin-left: 10px;
    font-weight: lighter;

`;

const CurencyConverter=styled.div`
    display: flex;
    align-items: center;
    padding: 30px 0px;
`;

const CurrencyImage=styled.img`
    width: 43px;
    height: 31px;
    margin: 20px;
`;

const CurrencyBody=styled.p`
    color: #666;
    font-size: 16px;

`;

const CurrSpan=styled.span`
    color: #333;
`;

const ConverterInput=styled.input`
    border: 1px solid #666;
    border-radius: 3px;
    box-shadow: 4px 4px 0 0 #f2f2f2 inset;
    box-sizing: border-box;
    color: #333 !important;
    cursor: pointer;
    font: 400 20px/23px "HelveticaNeue-Medium","Helvetica Neue Medium","Helvetica Neue",Helvetica,Arial,"Lucida Grande",sans-serif;
    height: 60px;
    padding: 10px;
    width: 86%;
`;

const PriceSection=styled.div`
    background: #fff;
    padding: 10px;
    box-shadow: 4px 4px 0 0 #f2f2f2 inset;
`;

const LowPrice=styled.h6`
    color: #b15a03;
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 9px;
    margin-top: 8px;
    text-align: center;
`;

const FlightFare=styled.h5`
    text-align: center;
    font: 600 22px/29px Emirates-Medium;
`;

const FareDetails=styled.h6`
        color: #333;
        font-size: 16px;
        font-weight: lighter;
        text-align: center;
        margin: 10px;
        line-height: 1.5em;
`;

const FairConditions=styled.p`
    color: #333;
    margin: 30px 0px;
    font-size: 16px;
`;

const FlightDetails=styled.div`

`;

const OutboundDetails=styled.div`
    position: relative;
    border-top: 1px solid #ccc;
    width: 100%;
    `;

const Outbound=styled.h3`
    left: 40%;
    top: -14px;
    position: absolute;
    background-color: #f7f7f7;
    padding: 0px 20px;
    font-size: 23px;
    color: #333;
    z-index: 0;
`;

const OutboundDate=styled.h4`
    font-size: 20px;
    color: #333;
    margin: 15px 0px;
`;

const Flightbox=styled.div`
    display: flex;
`;

const TravelData=styled.div`
    display: flex;
    flex-direction: column;
    border: solid #c7c7c7 1px;
    border-radius: 3px;
    box-sizing: border-box;
    background: #f7f7f7;
    margin-bottom: 30px;
    width: 40%;
`;

const FlightCode=styled.div`
    display: flex;
    align-items: center;
    justify-content: right;
    background: #fff;
    border-radius: 2px 2px 0 0;
    box-shadow: 0 1px 5px rgba(0,0,0,.1);
    height: 40px;
    padding: 0 20px 0 14px;
    position: relative;
`;

const EmiritesFlag=styled.img`
    width: 28px;
    height: 23px;
`;

const FlagCode=styled.div`

`;

const Code=styled.p`
    color: #666;
    font: 300 12px/14px arial,sans-serif;
    letter-spacing: -.04em;
    text-align: right;
`;

const FlightData=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 0 0 3px 3px;
    height: 100px;
    overflow: initial;
    position: relative;
    width: 393px;
    padding: 17px 14px 20px;
`;

const AirportTime=styled.div`
    display: flex;
    flex-direction: column;
    color: #333;
    float: left;
    margin: 5px 24px;
    width: 97px;
    
`;

const AirportCode=styled.h5`
    font: 400 16px/22px arial,sans-serif;
`;

const FlightTime=styled.h4`
    font: 700 24px/28px arial,sans-serif;
    vertical-align: top;
    position: relative;
`;

const FlightDuration=styled.div`
    display: flex;
    flex-direction: column;
    float: left;
    margin: 0;
    text-align: center;
    position: relative;
`;

const TravelDetail=styled.p`
    color: #666;
    display: block;
    font-size: 13px;
    font: 400 12px/18px arial,sans-serif;

    &:before{
        content: '';
        border: solid 1px rgba(187,187,187,.5);
        position: absolute;
        width: 81%;
        top: 32px;
        right: 18px;
    }
`;

const FlightTrackImg=styled.div`
    width: 177px;
    text-align: left;
    margin-top: -2px;
    display: flex;
    position: relative;
    align-items: center;

    &:before{
        content: '';
        background: #fbfbfb;
        border: solid 2px #bdbdbd;
        border-radius: 10px;
        right: 72px;
        top: 12px;
        width: 6px;
        height: 6px;
        position: absolute;
    }

    &:after{
    content: '';
    background: #bbb;
    border-radius: 10px;
    right: 10px;
    top: 12px;
    width: 10px;
    height: 10px;
    position: absolute;
    }
`;

const FlightImage=styled.img`
    width: 34px;
`;

const FairData=styled.div`
    display: flex;
    flex-direction: column;
    border-top: #1f5a2d 4px solid;
    border: solid #c7c7c7 0px 1px 1px 1px;
    box-sizing: border-box;
    background: #ffffff;
    box-shadow: 0 0 4px 4px #f2f2f2 inset;
    margin-bottom: 30px;
    width: 60%;
`;

const SelectedClass=styled.h6`
    color: #1f5a2d;
    font-size: 20px;
    margin: 20px;
`;

const SelectedClassFair=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ClassFair=styled.p`
    font-size: 16px;
    color: #666;
    line-height: 1.5em;
`;

const ClassFairInr=styled.h6`
    text-align: center;
    display: block;
    font-size: 16px;
    color: #333;
    max-width: 160px;
    margin: auto;
    font-weight: 800;
`;
