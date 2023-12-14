import React from 'react';
import { HiExternalLink } from "react-icons/hi";
import { Link } from 'react-scroll';
import styled from 'styled-components';

const FirstSection = () => {
  return (
	<>
		<FirstContainer>
			<First_ul>
				<FirstHead>About us</FirstHead>
				<First_li><First_a>About us</First_a></First_li>
				<First_li><First_a>Careers <HiExternalLink /></First_a></First_li>
				<First_li><First_a>Media Centre <HiExternalLink /></First_a></First_li>
				<First_li><First_a>Our planet</First_a></First_li>
				<First_li><First_a>Our people</First_a></First_li>
				<First_li><First_a>Our communities</First_a></First_li>
			</First_ul>
			<First_ul>
				<FirstHead>Help</FirstHead>
				<First_li><First_a>Help and Contact</First_a></First_li>
				<First_li><First_a>Travel Updates</First_a></First_li>
				<First_li><First_a>Special Assistance</First_a></First_li>
				<First_li><First_a>Frequently asked questions</First_a></First_li>
			</First_ul>
			<First_ul>
				<FirstHead>Book</FirstHead>
				<First_li><First_a>Book flights</First_a></First_li>
				<First_li><First_a>Travel services</First_a></First_li>
				<First_li><First_a>Transportation</First_a></First_li>
				<First_li><First_a>Planning your trip</First_a></First_li>
				<First_li><First_a>Search for flights</First_a></First_li>
			</First_ul>
			<First_ul>
				<FirstHead>Manage</FirstHead>
				<First_li><First_a>Check-in</First_a></First_li>
				<First_li><First_a>Manage your booking</First_a></First_li>
				<First_li><First_a>Chauffeur drive</First_a></First_li>
				<First_li><First_a>Flight status</First_a></First_li>
			</First_ul>
		</FirstContainer>
	
		<FirstContainer>
			<First_ul>
				<FirstHead>Before you fly</FirstHead>
				<First_li><First_a>Baggage</First_a></First_li>
				<First_li><First_a>Visa and passport information</First_a></First_li>
				<First_li><First_a>Health</First_a></First_li>
				<First_li><First_a>Travel information</First_a></First_li>
				<First_li><First_a>Dubai International</First_a></First_li>
				<First_li><First_a>To and from the airport</First_a></First_li>
				<First_li><First_a>Rules and notices</First_a></First_li>
			</First_ul>
			<First_ul>
				<FirstHead>Where we fly</FirstHead>
				<First_li><First_a>Route map</First_a></First_li>
				<First_li><First_a>Africa</First_a></First_li>
				<First_li><First_a>Asia and Pacific</First_a></First_li>
				<First_li><First_a>Europe</First_a></First_li>
				<First_li><First_a>The Americas</First_a></First_li>
				<First_li><First_a>The Middle East</First_a></First_li>
				<First_li><First_a>Flights to all countries/territories</First_a></First_li>
			</First_ul>
			<First_ul>
				<FirstHead>Experience</FirstHead>
				<First_li><First_a>Cabin features</First_a></First_li>
				<First_li><First_a>Shop Emirates</First_a></First_li>
				<First_li><First_a>What's on your flight</First_a></First_li>
				<First_li><First_a>Inflight entertainment</First_a></First_li>
				<First_li><First_a>Dining</First_a></First_li>
				<First_li><First_a>Our lounges</First_a></First_li>
			</First_ul>
			<First_ul>
				<FirstHead>Loyalty</FirstHead>
				<First_li><First_a>Log in to Emirates Skywards</First_a></First_li>
				<First_li><First_a>Join Emirates Skywards</First_a></First_li>
				<First_li><First_a>Our partners</First_a></First_li>
				<First_li><First_a>Business Rewards benefits</First_a></First_li>
				<First_li><First_a>Register your company</First_a></First_li>
				<First_li><First_a>Emirates Skywards Programme Rules</First_a></First_li>
			</First_ul>
		</FirstContainer>

	</>
  )
}

export default FirstSection

const FirstContainer=styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	border-bottom: 1px solid #d9d9d933; 
	padding: 30px 0px;
	`;

const First_ul=styled.ul`
	width: 25%;
`;

const FirstHead=styled.h4`
	font-family: "Emirates-Medium";
	color: white;
	font-size: 18px;
	font-weight: lighter;
	margin-bottom: 15px;
`;
const First_li=styled.li`
	line-height: 1.3;
`;

const First_a=styled(Link)`
	font-family: Helvetica;
	color: #a9a9a9;
	font-size: 14px;

	&:hover{
		text-decoration: underline;
    	background: #ffffff1a;
		cursor: pointer;
	}
`;
