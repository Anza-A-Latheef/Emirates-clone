import React,{useState,useEffect,useContext} from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom';
import { FaSuitcase } from "react-icons/fa";
import { MdCalendarMonth } from "react-icons/md";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { TiTick } from "react-icons/ti";
import { DetailContext, InboundContext } from './SearchPage';
import { PassengerNamesContext} from './SearchPage';


	const Payment = ({ totalPassengers,totalFare,setTotalFare}) => {
			const {totalPassenger,classes,departureDate,returnDate} = useParams();
			// const [totalFare,setTotalFare]=useState();
			const {selectedFlight} = useContext(DetailContext);
			const {inboundSelectedFlight}=useContext(InboundContext);
			const {passengerNames} = useContext(PassengerNamesContext);

			const generatePassengerNames = ()=>{
				let namelist=[];
				for (let i=1; i<=totalPassengers;i++){
					namelist.push(
						<ReviewPassengerName key={i}>{passengerNames[i-1]}</ReviewPassengerName>
			);};
			return namelist;
		};

		useEffect(() => {
		
			for (let i in inboundSelectedFlight.SeatingClass){
				const fare=((selectedFlight.SeatingClass[classes.slice(0, -6)]+inboundSelectedFlight.SeatingClass[classes.slice(0, -6)])*totalPassengers)
				setTotalFare(fare)
				break;
			}
		}, [selectedFlight,inboundSelectedFlight]);
;
				
	return (
		<div>
			<PaymentPage>
			<PaymentHead>Review your selection</PaymentHead>
			<ReviewSelection>
				<ReviewSelectionHead>
						<Flights>Flights</Flights>
						<AllFlights>All Flight details</AllFlights>
						<FlightDetailP>For {totalPassenger} passenger (Including airfare, taxes, fees and carrier-imposed charges)</FlightDetailP>
						<TotalInr>Total: INR {totalFare}</TotalInr>
				</ReviewSelectionHead>
				<ReviewFlights>
					<ReviewFlight>
						<ReviewDate>{departureDate}</ReviewDate>
						<FlightDataCont>
							<FlightData>
								<AirportTime>
									<FlightTime>{selectedFlight.departure_time}</FlightTime>
									<AirportCode>{selectedFlight.departure}</AirportCode>
								</AirportTime>
								<FlightDuration>
									<TravelDetail>{selectedFlight.travel_time}</TravelDetail>
									<FlightTrackImg>
										<FlightImage alt="" src="https://fly4.ekstatic.net/Images/farebrand_refresh/flight@2x.png"/>
									</FlightTrackImg>
									<TravelDetail><u>1 connection</u></TravelDetail>
								</FlightDuration>
								<AirportTime>
									<FlightTime>{selectedFlight.arrival_time}</FlightTime>
									<AirportCode>{selectedFlight.arrival}</AirportCode>
								</AirportTime>
							</FlightData>
							<ClassFare>
								<ClassFareHead>Class/Fare</ClassFareHead>
								<ClassFareDetail>{classes.slice(0, -6)}/Flex</ClassFareDetail>
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
						{inboundSelectedFlight &&
						<>
							<ReviewDate>{returnDate}</ReviewDate>
							<FlightDataCont>
								<FlightData>
									<AirportTime>
										<FlightTime>{inboundSelectedFlight.arrival_time}</FlightTime>
										<AirportCode>{inboundSelectedFlight.arrival}</AirportCode>
									</AirportTime>
									<FlightDuration>
										<TravelDetail>{inboundSelectedFlight.travel_time}</TravelDetail>
										<FlightTrackImg>
											<FlightImage alt="" src="https://fly4.ekstatic.net/Images/farebrand_refresh/flight@2x.png"/>
										</FlightTrackImg>
										<TravelDetail><u>1 connection</u></TravelDetail>
									</FlightDuration>
									<AirportTime>
									<FlightTime>{inboundSelectedFlight.departure_time}</FlightTime>
									<AirportCode>{inboundSelectedFlight.departure}</AirportCode>
									</AirportTime>
								</FlightData>
									<ClassFare>
										<ClassFareHead>Class/Fare</ClassFareHead>
										<ClassFareDetail>{classes.slice(0, -6)}/Flex</ClassFareDetail>
									</ClassFare>
							</FlightDataCont>
						</> 
						}
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
				</ReviewFlights>
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
							<PassengerTitle>Passengers<PassengersTitleSpan>({totalPassengers} Person)</PassengersTitleSpan></PassengerTitle>
						</ReviewPassengersHead>
						<ReviewPassengerContent>
							<PassengerNameDiv>
						{generatePassengerNames()}
							</PassengerNameDiv>
							<ReviewPassengerBottom>
								<TotalPaid>Total to be paid:</TotalPaid>
								<TotalPaid>INR {totalFare}</TotalPaid>
							</ReviewPassengerBottom>
						</ReviewPassengerContent>
					</ReviewPassengers>
			</ReviewSelection>
				<PaymentOptions>
					<PaymentOptionsHead>Payment options</PaymentOptionsHead>
					<PaymentOptionsUl>
						<PaymentOptionsLi>
							<PaymentOptHead>In full</PaymentOptHead>
							<PaymentOptCont>Pay in full,using your preferred payment method</PaymentOptCont>
							<GreenMark><TiTick /></GreenMark>
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
							<PaymentMethod>Choose payment method</PaymentMethod>
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
							<PayDetailTotal>INR {totalFare}</PayDetailTotal>
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
							<ConditionInput type="checkbox" name="CheckPolicy"/>
							<ConditionLabel>I understand that Emirates can change seat assignments as a result of operational, safety or security reasons and I have read and understood the seat selection refund conditions. *</ConditionLabel>
						</Condition>
						<Condition>
							<ConditionInput type="checkbox" name="CheckPolicy"/>
							<ConditionLabel>Please tick this box to indicate that you have read and agree to the terms and conditions.</ConditionLabel>
						</Condition>
					</Conditions>
				</TermsSection>
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

const PassengerNameDiv=styled.div`
display: flex;
		flex-direction: column;
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
	padding: 30px 0 14px;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    flex: 1 1 auto;
	`;

	const PaymentOptionsHead=styled.h2`
	font-weight: 400;
    font-family: Emirates-Medium;
    display: block;
    margin-bottom: 0;
    font-weight: 700;
    font-size: 30px;
    text-align: center;
	`;

	const PaymentOptionsUl=styled.ul`
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 20px;
		margin-top:20px;
		`;

const PaymentOptionsLi=styled.li`
	position: relative;
	min-height: 130px;
	flex-wrap: nowrap;
	padding:15px 115px;
	background-color: #fff;
	border: none;
	border-radius: 3px;
	box-shadow: 0 2px 4px 2px rgba(0,0,0,.1);
	`;

const PaymentOptHead=styled.h3`
		font-weight: 400;
		font-family: Emirates-Medium;
		display: block;
		font-weight: 700;
		font-size: 21px;
		text-align: center;
		margin-bottom: 10px;
			&::after {
			content: '';
			display: block;
			width: 90%;
			height: 1px;
			margin: 0 auto 10px;
			background-color: #c60c30;
			border-top: 1px solid #c60c30;
		}
`;

const PaymentOptCont = styled.p`
	position: relative;
	margin: 0 -10px;
	color: #333;
	text-align: center;
	font-family: Helvetica;
	font-size: 15px;
`;
 
	const GreenMark=styled.div`
		position: absolute;
		top: 0;
		right: 0;
		display: block;
		color: #fff;
			&::before {
			content: "";
			position: absolute;
			top: 0;
			right: 0;
			border-color: #287214 #287214 transparent transparent;
			border-style: solid;
			border-width: 20px;
		}
	`;

	const PaymentDetails=styled.div`
		padding: 40px;

	`;

	const PaymentDetailsHead=styled.h2`
	font-weight: 400;
    font-family: Emirates-Medium;
    display: block;
    margin-bottom: 0;
    font-weight: 700;
    font-size: 30px;
    text-align: center;
	`;

	const PaymentDetailsContent=styled.div`
	display: flex;
	gap: 20px;
	padding: 10px;
	`;

	const PaymentDetailsLeft=styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;

	`;

	const PaymentMethod=styled.h6`
		font-family: Helvetica;
		font-size: 16px;
	`;

	const PayDetailUl=styled.ul`
	margin-top: 20px;
	display: flex;
	flex-direction: column;    
	`;

	const PayDetailLi=styled.li`
	    margin: 0 0 15px;
		display: flex;
		border-radius: 3px;
		padding: 15px;
		justify-content: space-between;
    	box-shadow: 0 2px 4px 2px rgba(0,0,0,.1);
	`;

	const PaymentLiLeft=styled.div`
		display: flex;
		justify-content: space-between;
		align-items: center;
	`;

	const AddButon=styled.h3`
		display: flex;
		justify-content: center;
		align-items: center;
		width: 24px;
		height: 24px;
		color: #fff;
		background: #d71921;
		border-radius: 50%;
		font-weight: bolder;
		font-size: 16px;
`;

	const PayDetailOpt=styled.h6`
	font-size: 1.1rem;
	margin-left:10px ;
	font-family: Helvetica;
	`;

	const PaymentLiImg=styled.img`
	    width: 45px;
    	height: 30px;
	`;

	const PaymentDetailsRight=styled.div`
	margin: 40px 0;
	height: 125px;
	width: 50%;
    color: #333;
    background-color: #fff;
    border: 1px solid #c7c7c7;
    border-radius: 3px;
	padding: 0px 30px;
    box-shadow: 1px 2px 2px #f2f2f2;
	display: flex;
		align-items: center;
		justify-content: space-between;
	`;

	const PayDetailTotal=styled.h5`
	font-weight: 700;
    font-family: Helvetica;
    font-size: 1.4rem;
	`;

	const TermsSection=styled.div`
		background-color: white;
		display: flex;
		flex-direction: column;
		padding: 20px 0;
		align-items: center;
		justify-content: center;
	`;


	const TermsHead=styled.h5`
	color: #333;
	font-size: 19px;
	font-family: Helvetica;
	margin-bottom: 20px;
	`;

const TermsUl=styled.ul`
	display: flex;
	gap: 20px;
	width:90%;
	flex-wrap: wrap;
	justify-content: center;
	`;
	
	const TermsLi=styled.li`
		font-family: Helvetica;
		text-decoration: underline;
		color: #333;
		font-size: 17px;
		font-weight: 30px;
		white-space:nowrap;
	`;

	const Conditions=styled.div`
	margin-top: 50px;
	background-color: #fbfbfb;
	width: 100%;
	padding-left: 20px;
	`;

	const Condition=styled.div`
	    display: flex;
    margin-top: 20px;
	`;

	const ConditionInput=styled.input`
	    position: relative;
		width: 18px;
		height: 18px;
		appearance: none;
		&::before{
			content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    margin-right: 10px;
    border: 1px solid #333;
    background-color: transparent;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
		}

		&:checked {
        &:before {
            content: '\u2714'; 
            position: absolute;
            top: 0;
            left: 0;
            font-size: 15px;
            color: #c60c30; 
    }
  }
	`;

	const ConditionLabel=styled.label`
	    font-weight: lighter;
    font-family: Helvetica;
    text-align: left;
    color: #333;
    font-size: 14px;
    margin: 0px 20px;
    line-height: 1.3;
	`;
