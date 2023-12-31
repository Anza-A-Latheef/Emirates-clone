import React ,{useState} from 'react';
import { HiExternalLink } from "react-icons/hi";
import styled from 'styled-components';

const FirstSection = () => {
	const [openSections, setOpenSections] = useState({});
	const toggleSection = (section) => {
		setOpenSections((prevOpenSections) => ({
		  ...prevOpenSections,
		  [section]: !prevOpenSections[section],
		}));
	  };
	
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

		{/* RESPONSIVE FOOTER */}

		<FirstContainerResp>
			<First_ul>
				<FirstHead onClick={() => toggleSection('aboutUs')}>About us</FirstHead>
    	      	<SectionList open={openSections.aboutUs}>
					<First_li><First_a>About us</First_a></First_li>
					<First_li><First_a>Careers <HiExternalLink /></First_a></First_li>
					<First_li><First_a>Media Centre <HiExternalLink /></First_a></First_li>
					<First_li><First_a>Our planet</First_a></First_li>
					<First_li><First_a>Our people</First_a></First_li>
					<First_li><First_a>Our communities</First_a></First_li>
				</SectionList>
			</First_ul>
			<First_ul>
				<FirstHead onClick={() => toggleSection('Help')}>Help</FirstHead>
    	      	<SectionList open={openSections.Help}>
					<First_li><First_a>Help and Contact</First_a></First_li>
					<First_li><First_a>Travel Updates</First_a></First_li>
					<First_li><First_a>Special Assistance</First_a></First_li>
					<First_li><First_a>Frequently asked questions</First_a></First_li>
				</SectionList>
			</First_ul>
			<First_ul>
				<FirstHead onClick={() => toggleSection('book')}>Book</FirstHead>
    	      	<SectionList open={openSections.book}>
					<First_li><First_a>Book flights</First_a></First_li>
					<First_li><First_a>Travel services</First_a></First_li>
					<First_li><First_a>Transportation</First_a></First_li>
					<First_li><First_a>Planning your trip</First_a></First_li>
					<First_li><First_a>Search for flights</First_a></First_li>
				</SectionList>
			</First_ul>
			<First_ul>
				<FirstHead onClick={() => toggleSection('manage')}>Manage</FirstHead>
    	      	<SectionList open={openSections.manage}>
					<First_li><First_a>Check-in</First_a></First_li>
					<First_li><First_a>Manage your booking</First_a></First_li>
					<First_li><First_a>Chauffeur drive</First_a></First_li>
					<First_li><First_a>Flight status</First_a></First_li>
				</SectionList>
			</First_ul>
		</FirstContainerResp>

		 {/* RESPONSIVE FOOTER ENDS */}

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

	{/* RESPONSIVE FOOTER */}

		<FirstContainerResp>
			<First_ul>
				<FirstHead onClick={() => toggleSection('Beforeyoufly')}>Before you fly</FirstHead>
				<SectionList open={openSections.Beforeyoufly}>
					<First_li><First_a>Baggage</First_a></First_li>
					<First_li><First_a>Visa and passport information</First_a></First_li>
					<First_li><First_a>Health</First_a></First_li>
					<First_li><First_a>Travel information</First_a></First_li>
					<First_li><First_a>Dubai International</First_a></First_li>
					<First_li><First_a>To and from the airport</First_a></First_li>
					<First_li><First_a>Rules and notices</First_a></First_li>
				</SectionList>
			</First_ul>
			<First_ul>
				<FirstHead onClick={() => toggleSection('Wherewefly')}>Where we fly</FirstHead>
				<SectionList open={openSections.Wherewefly}><First_li><First_a>Route map</First_a></First_li>
					<First_li><First_a>Africa</First_a></First_li>
					<First_li><First_a>Asia and Pacific</First_a></First_li>
					<First_li><First_a>Europe</First_a></First_li>
					<First_li><First_a>The Americas</First_a></First_li>
					<First_li><First_a>The Middle East</First_a></First_li>
					<First_li><First_a>Flights to all countries/territories</First_a></First_li>
				</SectionList>
			</First_ul>
			<First_ul>
				<FirstHead onClick={() => toggleSection('Experience')}>Experience</FirstHead>
				<SectionList open={openSections.Experience}><First_li><First_a>Cabin features</First_a></First_li>
					<First_li><First_a>Shop Emirates</First_a></First_li>
					<First_li><First_a>What's on your flight</First_a></First_li>
					<First_li><First_a>Inflight entertainment</First_a></First_li>
					<First_li><First_a>Dining</First_a></First_li>
					<First_li><First_a>Our lounges</First_a></First_li>
				</SectionList>
			</First_ul>
			<First_ul>
				<FirstHead onClick={() => toggleSection('Loyalty')}>Loyalty</FirstHead>
				<SectionList open={openSections.Loyalty}><First_li><First_a>Log in to Emirates Skywards</First_a></First_li>
					<First_li><First_a>Join Emirates Skywards</First_a></First_li>
					<First_li><First_a>Our partners</First_a></First_li>
					<First_li><First_a>Business Rewards benefits</First_a></First_li>
					<First_li><First_a>Register your company</First_a></First_li>
					<First_li><First_a>Emirates Skywards Programme Rules</First_a></First_li>
				</SectionList>
			</First_ul>
		</FirstContainerResp>

		{/* RESPONSIVE FOOTER ENDS */}

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

	@media (max-width: 768px) {
    display: none;
  }
`;

const FirstContainerResp=styled.div`
	width: 100%;
	display: none;
	cursor: pointer;
	flex-direction: column;
	align-items: center;
  	text-align: center;

	@media (max-width: 768px) {
    display: flex;
  }
`;


const First_ul=styled.ul`
	width: 25%;

	@media (max-width: 980px) {
		width: 100%;
	border-bottom: 1px solid #d9d9d933; 

  }

	@media (max-width: 768px) {
		width: 100%;
  }
`;

const SectionList = styled.ul`
  list-style: none;
  padding: 0;
  display: ${(props) => (props.open ? 'block' : 'none')};
`;


const FirstHead=styled.h4`
	font-family: "Emirates-Medium";
	color: white;
	font-size: 18px;
	font-weight: lighter;
	margin-bottom: 15px;

	@media (max-width: 768px) {
		font-size: 20px;
		margin: 15px 0px;
  }
`;
const First_li=styled.li`
	line-height: 1.3;

	@media (max-width: 768px) {
		line-height: 1.4;
  }
`;

const First_a=styled.a`
	font-family: Helvetica;
	color: #a9a9a9;
	font-size: 14px;

	@media (max-width: 768px) {
		font-size: 16px;
  }

	&:hover{
		text-decoration: underline;
    	background: #ffffff1a;
		cursor: pointer;
	}
`;
