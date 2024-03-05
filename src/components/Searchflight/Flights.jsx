import React,{useState,useEffect, useContext} from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom';
import FlightDetail from '../../assets/FlightDetail.json'
import { PaymentContext } from '../../App';
import { DetailContext } from './SearchPage';
import { InboundContext } from './SearchPage';

export default function Flights() {
    const { departure, arrival, totalPassenger, classes, departureDate, returnDate } = useParams();
    const { emiratesFlight, setEmiratesFlight } = useContext(PaymentContext);
    const [totalFare, setTotalFare] = useState();
    const { selectedFlight, setSelectedFlight} = useContext(DetailContext);
    const {inboundSelectedFlight, setInboundSelectedFlight }=useContext(InboundContext);

    useEffect(() => {
        const filteredFlights = FlightDetail.filter(flight => {
            return (
                flight.departure_place.includes(departure.slice(0, -6)) &&
                flight.arrival_place.includes(arrival.slice(0, -6))
            );
        });
        const totalFare = totalPassenger * filteredFlights[0]?.SeatingClass[classes.slice(0,-6)];

        setEmiratesFlight(filteredFlights);
        setTotalFare(totalFare); 
        
        
    },  [departure, arrival, setEmiratesFlight, totalPassenger, classes]);
    
    const handleSelectFlight = (flight,bool) => {
        if(bool){
            setSelectedFlight(flight);
        }else{
            setInboundSelectedFlight(flight)
        }
    };

    return (
    <div>
        <CurencyConverter>
            <CurrencyImage  src="https://fly4.ekstatic.net/Images/nld.png" />
            <CurrencyBody>You are viewing prices in <CurrSpan>INR.</CurrSpan>. If you would like to view prices in another currency you can change it from the dropdown menu. The online exchange rates provided are indicative and intended as a guide only. Final payment will be completed in <CurrSpan>INR.</CurrSpan></CurrencyBody>
            <ConverterInput placeholder="Currency Converter"/>
        </CurencyConverter>
        <PriceSection>
            <LowPrice>Lowest price for all passengers</LowPrice>
            <FlightFare>INR {totalFare}</FlightFare>
            <FareDetails>This price is the lowest available price combination for your selected dates. Look for the lowest price indicator in the results below to get this price. All prices below include airfare, taxes, fees and carrier-imposed charges for {totalPassenger} passengers.</FareDetails>
        </PriceSection>
        <FairConditions>Please ensure you read the <u> fare conditions</u> at the bottom before selecting your flights.</FairConditions>
        <FlightDetails>
            <OutboundDetails>
                <Outbound>Outbound, {departure.slice(0,-5)} to {arrival.slice(0,-5)}</Outbound>
                <OutboundDate>{departureDate}</OutboundDate>
                {emiratesFlight && emiratesFlight.map((flight, index) => (
                <Flightbox key={index} flight={flight} selectedFlight={selectedFlight} onClick={() => {handleSelectFlight(flight,true)}}>
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
                        <SelectedClass>{classes.slice(0,-6)}</SelectedClass>
                        <SelectedClassFair>
                            <ClassFair>from INR</ClassFair>
                            <ClassFairInr>{flight.SeatingClass[classes.slice(0,-6)]}</ClassFairInr>
                        </SelectedClassFair>
                    </FairData>
                </Flightbox>))}
            </OutboundDetails>
            <OutboundDetails>
                <Outbound>Inbound, {arrival.slice(0,-5)} to {departure.slice(0,-5)}</Outbound>
                <OutboundDate>{returnDate}</OutboundDate>
                {emiratesFlight && emiratesFlight.map((flight, index) => (
                <Flightbox key={index} flight={flight} inboundSelectedFlight={inboundSelectedFlight} onClick={() => handleSelectFlight(flight,false)}>
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
                        <SelectedClass>{classes.slice(0,-6)}</SelectedClass>
                        <SelectedClassFair>
                            <ClassFair>from INR</ClassFair>
                            <ClassFairInr>{flight.SeatingClass[classes.slice(0,-6)]}</ClassFairInr>
                        </SelectedClassFair>
                    </FairData>
                </Flightbox>))}
            </OutboundDetails>
        </FlightDetails>
        <FairSummary>
            <FairHead>Fare conditions</FairHead>
            <FairPoints>• Note: Upgrade prices and seat selection are only applicable to Emirates operated flights.</FairPoints>
            <FairPoints>• View our <u>Emirates seat selection rules and rates.</u></FairPoints>
            <FairPoints>• <b>Important:</b> Change fees will be charged in addition to any applicable fare difference.<br/>The amounts quoted for refunds, change fees, Miles earned or upgrades are per person. Upgrades with Miles are subject to availability on Emirates operated flights only.</FairPoints>
        </FairSummary>
    </div>
  )
}

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
    font: 400 20px/23px Helvetica ;
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
    margin-bottom: 30px;
    cursor: pointer;
    border: 2px solid transparent; 

    &:hover {
        border: 2px solid black;
    }
    ${({ flight, selectedFlight }) =>
        selectedFlight && selectedFlight.flight_code === flight.flight_code &&
        `
            border: 2px solid black;
        `}
    ${({ flight, inboundSelectedFlight }) =>
        inboundSelectedFlight && inboundSelectedFlight.flight_code === flight.flight_code &&
        `
            border: 2px solid black;
        `}
`;

const TravelData=styled.div`
    display: flex;
    flex-direction: column;
    border: solid #c7c7c7 1px;
    border-radius: 3px;
    box-sizing: border-box;
    background: #f7f7f7;
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
    /* margin-bottom: 30px; */
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
