import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom';
import FlightDetail from '../../assets/FlightDetail.json'
import { FaSuitcase } from "react-icons/fa";
import { MdCalendarMonth } from "react-icons/md";
import { RiMoneyDollarBoxFill } from "react-icons/ri";

	const Payment = () => {
			const {departure,arrival ,totalPassenger,classes,departureDate,returnDate} = useParams();
			const [emiratesFlight,setEmiratesFlight]=useState([]);
			const [totalFare,setTotalFare]=useState();
		
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
			}, [departure, arrival, totalPassenger, classes]);

	return (
		<div>
			<PaymentPage>
			<PaymentHead>Review your selection</PaymentHead>
			<ReviewSelection>
				<ReviewSelectionHead>
						<Flights>Flights</Flights>
						<AllFlights>All Flight details</AllFlights>
						<FlightDetailP>For 1 passenger (Including airfare, taxes, fees and carrier-imposed charges)</FlightDetailP>
						<TotalInr>Total: INR 194,026</TotalInr>
				</ReviewSelectionHead>
				{emiratesFlight.map((flight, index) => (
				<ReviewFlights key={index}>
					<ReviewFlight>
						<ReviewDate>Sat 9 Mar 24</ReviewDate>
						<FlightDataCont>
							<FlightData>
								<AirportTime>
									<FlightTime>{flight.departure_time}</FlightTime>
									<AirportCode>{flight.departure}</AirportCode>
								</AirportTime>
								<FlightDuration>
									<TravelDetail>{flight.travel_time}</TravelDetail>
									<FlightTrackImg>
										<FlightImage alt="" src="https://fly4.ekstatic.net/Images/farebrand_refresh/flight@2x.png"/>
									</FlightTrackImg>
									<TravelDetail><u>1 connection</u></TravelDetail>
								</FlightDuration>
								<AirportTime>
									<FlightTime>{flight.arrival_time}</FlightTime>
									<AirportCode>{flight.arrival}</AirportCode>
								</AirportTime>
							</FlightData>
							<ClassFare>
								<ClassFareHead>Class/Fare</ClassFareHead>
								<ClassFareDetail>Economy/Flex</ClassFareDetail>
							</ClassFare>
						</FlightDataCont>
						<ReviewFlightBottom>
							<ReviewFlightul>
								<ReviewFlightLi>
									<ReviewFlightSvg><FaSuitcase/></ReviewFlightSvg>
									<ReviewFlightTitle>Checked baggage:2 x 23kg</ReviewFlightTitle>
								</ReviewFlightLi>
								<ReviewFlightLi>
									<ReviewFlightSvg><MdCalendarMonth/></ReviewFlightSvg>
									<ReviewFlightTitle>Change fee:INR 2,000 <br/>No-show penaltyINR 8,000</ReviewFlightTitle>
								</ReviewFlightLi>
								<ReviewFlightLi>
									<ReviewFlightSvg><RiMoneyDollarBoxFill /></ReviewFlightSvg>
									<ReviewFlightTitle>Refund fee:INR 6,000 <br/>No-show penaltyINR 12,000</ReviewFlightTitle>
								</ReviewFlightLi>
								<ReviewFlightLi>
									<ReviewFlightTitle><u>View detailed fare conditions</u></ReviewFlightTitle>
								</ReviewFlightLi>
							</ReviewFlightul>
						</ReviewFlightBottom>
					</ReviewFlight>
					<ReviewFlight>
							<ReviewDate>Sat 9 Mar 24</ReviewDate>
							<FlightDataCont>
								<FlightData>
									<AirportTime>
										<FlightTime>{flight.departure_time}</FlightTime>
										<AirportCode>{flight.departure}</AirportCode>
									</AirportTime>
									<FlightDuration>
										<TravelDetail>{flight.travel_time}</TravelDetail>
										<FlightTrackImg>
											<FlightImage alt="" src="https://fly4.ekstatic.net/Images/farebrand_refresh/flight@2x.png"/>
										</FlightTrackImg>
										<TravelDetail><u>1 connection</u></TravelDetail>
									</FlightDuration>
									<AirportTime>
										<FlightTime>{flight.arrival_time}</FlightTime>
										<AirportCode>{flight.arrival}</AirportCode>
									</AirportTime>
									<ClassFare>
										<ClassFareHead>Class/Fare</ClassFareHead>
										<ClassFareDetail>Economy/Flex</ClassFareDetail>
									</ClassFare>
								</FlightData>
							</FlightDataCont>
						<ReviewFlightBottom>
							<ReviewFlightul>
								<ReviewFlightLi>
									<ReviewFlightSvg><FaSuitcase/></ReviewFlightSvg>
									<ReviewFlightTitle>Checked baggage:2 x 23kg</ReviewFlightTitle>
								</ReviewFlightLi>
								<ReviewFlightLi>
									<ReviewFlightSvg><MdCalendarMonth/></ReviewFlightSvg>
									<ReviewFlightTitle>Change fee:INR 2,000No-show penaltyINR 8,000</ReviewFlightTitle>
								</ReviewFlightLi>
								<ReviewFlightLi>
									<ReviewFlightSvg><RiMoneyDollarBoxFill /></ReviewFlightSvg>
									<ReviewFlightTitle>Refund fee:INR 6,000 No-show penaltyINR 12,000</ReviewFlightTitle>
								</ReviewFlightLi>
								<ReviewFlightLi>
									<ReviewFlightTitle><u>View detailed fare conditions</u></ReviewFlightTitle>
								</ReviewFlightLi>
							</ReviewFlightul>
						</ReviewFlightBottom>
					</ReviewFlight>
				</ReviewFlights>))}
				<ReviewMid>
					<ReviewMidUl>
						<ReviewMidLi>Fare Breakdown</ReviewMidLi>
						<ReviewMidLi>Fare rules/Terms and conditions</ReviewMidLi>
						<ReviewMidLi>Miles Summary</ReviewMidLi>
						<ReviewMidLi>Tax Breakdown</ReviewMidLi>
					</ReviewMidUl>
				</ReviewMid>
					<ReviewPassengers>
						<ReviewPassengersHead>
							<PassengerTitle>Passengers<PassengersTitleSpan>(1 Adult)</PassengersTitleSpan></PassengerTitle>
						</ReviewPassengersHead>
						<ReviewPassengerContent>
							<ReviewPassengerName>Miss Anza Alatheef</ReviewPassengerName>
							<ReviewPassengerBottom>
								<TotalPaid>Total to be paid:</TotalPaid>
								<TotalPaid>INR 159,568</TotalPaid>
							</ReviewPassengerBottom>
						</ReviewPassengerContent>
					</ReviewPassengers>
				<PaymentOptions>
					<PaymentOptionsHead>Payment options</PaymentOptionsHead>
					<PaymentOptionsUl>
						<PaymentOptionsLi>
							<PaymentOptHead>In full</PaymentOptHead>
							<PaymentOptCont>Pay in full,using your preferred payment method</PaymentOptCont>
						</PaymentOptionsLi>
						<PaymentOptionsLi>
							<PaymentOptHead>Cash+Miles</PaymentOptHead>
							<PaymentOptCont>Use Skywards Miles to reduce the total price</PaymentOptCont>
						</PaymentOptionsLi>
					</PaymentOptionsUl>
				</PaymentOptions>
				<PaymentDetails>
					<PaymentDetailsHead>Payment Details</PaymentDetailsHead>
					<PaymentDetailsContent>
						<PaymentDetailsLeft>
							<PayDetailUl>
								<PayDetailLi>
									<PaymentLiLeft>
										<AddButon>+</AddButon>
										<PayDetailOpt>Credit/Debit card</PayDetailOpt>
									</PaymentLiLeft>
									<PaymentLiImg src="	https://c.ekstatic.net/media/defaultcard__image-223-87014.png"/>
								</PayDetailLi>
								<PayDetailLi>
									<PaymentLiLeft>
									<AddButon>+</AddButon>
									<PayDetailOpt>Click to Pay</PayDetailOpt>
									</PaymentLiLeft>
									<PaymentLiImg src="	https://c.ekstatic.net/media/visa-checkout-w60x40-223-143360.png"/>
								</PayDetailLi>
								<PayDetailLi>
									<PaymentLiLeft>
									<AddButon>+</AddButon>
									<PayDetailOpt>Real-time bank transfer</PayDetailOpt>
									</PaymentLiLeft>
									<PaymentLiImg src="https://c.ekstatic.net/media/netbanking-icon-223-91523.png"/>
								</PayDetailLi>
								<PayDetailLi>
									<PaymentLiLeft>
									<AddButon>+</AddButon>
									<PayDetailOpt>Emirates office</PayDetailOpt>
									</PaymentLiLeft>
									<PaymentLiImg src="	https://c.ekstatic.net/media/townoffice-icon__image-223-86953.png"/>
								</PayDetailLi>
							</PayDetailUl>
						</PaymentDetailsLeft>
						<PaymentDetailsRight>
							<PayDetailTotal>Total to be paid:</PayDetailTotal>
							<PayDetailTotal>INR 159,568</PayDetailTotal>
						</PaymentDetailsRight>
					</PaymentDetailsContent>
				</PaymentDetails>
				<TermsSection>
					<TermsHead>Terms & conditions</TermsHead>
					<TermsUl>
						<TermsLi>Fare Conditions</TermsLi>
						<TermsLi>Conditions Carriage</TermsLi>
						<TermsLi>Online booking terms and conditions</TermsLi>
						<TermsLi>Privacy Policy</TermsLi>
						<TermsLi>Seat Selection</TermsLi>
						<TermsLi>Emirates Airline Foundation</TermsLi>
					</TermsUl>
					<Conditions>
						<Condition>
							<ConditionInput type='checkbox'/>
							<ConditionLabel>I understand that Emirates can change seat assignments as a result of operational, safety or security reasons and I have read and understood the seat selection refund conditions. *</ConditionLabel>
						</Condition>
						<Condition>
							<ConditionInput type='checkbox'/>
							<ConditionLabel>Please tick this box to indicate that you have read and agree to the terms and conditions.</ConditionLabel>
						</Condition>
					</Conditions>
				</TermsSection>
			</ReviewSelection>
			</PaymentPage>
		</div>
	)
	}

	export default Payment

	// styled area

	const PaymentPage=styled.div`
		width: 100%;
		background-color: #fbfbfb;
		`;

	const PaymentHead=styled.h2`
		font-family: Emirates-Medium;
		font-size: 30px;
		margin-top: 30px;
		margin-bottom: 20px;
		font-weight: 700;
		text-align: center;
	`;

const ReviewSelection=styled.div`
	display: flex;
	background-color: #fff;
	flex-direction: column;
	border: 1px solid #c7c7c7;
	border-radius: 3px;
`;

	const ReviewSelectionHead=styled.div`
    padding: 15px 10px;
    text-align: center;
    background: #f6f6f6;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

	const Flights=styled.h6`
	font-weight: 700;
    font-family: Helvetica;
    font-size: 20px;
    line-height: normal;
	color: #333;
`;

const AllFlights=styled.p`
	color: #333;
	margin: 0 10px;
    text-decoration: underline;
	white-space : nowrap;
	`;

	const FlightDetailP=styled.p`
	margin: 0px 40px;
	text-align: left;
	color: #666;
	`;

	const TotalInr=styled.h4`
		font-family:Helvetica;
		font-weight: 600;
		font-size: 19px;
		color: #333;
		white-space: nowrap;
	`;

	const ReviewFlights=styled.div`
		width: 100%;
		display: flex;
		flex-direction:column;
		padding: 20px 30px;
	`;

	const ReviewFlight=styled.div`
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width:100%;
		margin: 0 0 33px;
		border-radius: 3px;
		box-shadow: 0 2px 4px 2px rgba(0,0,0,.1);
		`;

const ReviewDate=styled.p`
		padding: 15px 15px 0px 15px;
		font-family: Helvetica;
		margin: 0 0 1px;
		color: #6f6f6f;
		font-size: 16px;
		line-height: normal;
	`;

const FlightDataCont=styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 80%;
`;

const FlightData=styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	border-radius: 0 0 3px 3px;
	height: 100px;
	overflow: initial;
	position: relative;
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

	const ClassFare=styled.div`
	display: flex;
	flex-direction: column;
	align-items:center;
	`;

	const ClassFareHead=styled.h6`
		font-family: Helvetica;
		font-size: 15px;

	`;
	const ClassFareDetail=styled.p`
		font-family: Helvetica;
		line-height: 1.7;
		font-size: 15px;
	`;

	const ReviewFlightBottom=styled.div`
	background-color: #f6f6f6;
	width: 100%;
	padding: 20px;
	`;

	const ReviewFlightul=styled.ul`
		display: flex;
		align-items: center;
		justify-content: space-between;
	`;

	const ReviewFlightLi=styled.li`
	width: 23%;
	display: flex;
	`;

	const ReviewFlightSvg=styled.div`
		margin: 0px 10px;
	`;

	const ReviewFlightTitle=styled.p`
	font-family: Helvetica;
	font-size: 15px;
	line-height: 1.3;
	`;

	const ReviewMid=styled.div`
	padding: 20px 20px;
    background: #f6f6f6;
	`;

	const ReviewMidUl=styled.ul`
		display: flex;
		gap: 20px;
	`;

	const ReviewMidLi=styled.li`
		font-family: Helvetica;
		font-size: 15px;
		text-decoration: underline;
	`;

	const ReviewPassengers=styled.div`
	
	`;

	const ReviewPassengersHead=styled.div`
	margin-top: 20px;
	padding: 10px 20px;
    background: #f6f6f6;
	display: flex;
	align-items: center;
	justify-content: space-between;
	`;

	const PassengerTitle=styled.h3`
	font-family: Helvetica;
    margin: 0 0 10px;
    font-weight: 700;
    font-size: 23px;
    line-height: normal;
	`;

	const PassengersTitleSpan=styled.span`
		font-size: 24px;
		text-decoration: underline;
		margin-left: 10px;
		cursor: pointer;
		font-weight: lighter;
	`;

	const ReviewPassengerContent=styled.div`
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		`;

const ReviewPassengerName=styled.h4`
		margin: 20px;
		font-family: Helvetica;
	`;

	const ReviewPassengerBottom=styled.div`
	background: #333;
	padding: 15px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	`;

	const TotalPaid=styled.h5`
	color: #fff;
	font-family: Helvetica;
	font-size: 18px;
	`;

	const PaymentOptions=styled.div`
	
	`;

	const PaymentOptionsHead=styled.h2`
	
	`;

	const PaymentOptionsUl=styled.ul`
	
	`;

	const PaymentOptionsLi=styled.li`
	
	`;

	const PaymentOptHead=styled.h3`
	
	`;

	const PaymentOptCont=styled.p`
	
	`;

	const PaymentDetails=styled.div`
	
	`;

	const PaymentDetailsHead=styled.h2`
	
	`;

	const PaymentDetailsContent=styled.div`
	
	`;

	const PaymentDetailsLeft=styled.div`
	
	`;

	const PayDetailUl=styled.ul`
	
	`;

	const PayDetailLi=styled.li`
	
	`;

	const PaymentLiLeft=styled.div`
	
	`;

	const AddButon=styled.h6`
	
	`;

	const PayDetailOpt=styled.h6`
	
	`;

	const PaymentLiImg=styled.img`
	
	`;

	const PaymentDetailsRight=styled.div`
	
	`;

	const PayDetailTotal=styled.h5`
	
	`;

	const TermsSection=styled.div`
	
	`;

	const TermsHead=styled.h5`
	
	`;

	const TermsUl=styled.ul`
	
	`;

	const TermsLi=styled.li`
	
	`;

	const Conditions=styled.div`
	
	`;

	const Condition=styled.div`
	
	`;

	const ConditionInput=styled.input`
	
	`;

	const ConditionLabel=styled.label`
	
	`;
