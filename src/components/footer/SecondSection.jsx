import React from 'react';
import styled from 'styled-components';
import MediaSection from './MediaSection';
import LogoSection from './LogoSection';

const SecondSection = () => {
	return (
		<SecondContainer>
			<Second_ul>
				<SecondHead>Subscribe to our special offers</SecondHead>
				<Second_li><Second_a>Save with our latest fares and offers.</Second_a></Second_li>
				<Second_li><SecondStyled>Unsubscribe or change your preferences</SecondStyled></Second_li>
			</Second_ul>
			<Second_ul>
				<SecondHead>Emirates App</SecondHead>
				<Second_li><Second_a>Book and manage your flights on the go.</Second_a></Second_li>
			</Second_ul>
			<Second_ul>
				<SecondHead>Connect with us</SecondHead>
				<Second_li><Second_a>Share your Emirates experience.</Second_a></Second_li>
			</Second_ul>
			<MediaSection/>
			<Second_p>For details on how we use your information, please see <br/>our <SecondStyled>Privacy policy</SecondStyled></Second_p>
			<LogoSection/>
		</SecondContainer>
	)
}

export default SecondSection

//styling area

const SecondContainer=styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	padding: 30px 0px 15px 0px;
	`;

const Second_ul=styled.ul`
	width: 33%;
`;

const SecondHead=styled.h4`
	font-family: "Emirates-Medium";
	color: white;
	font-size: 18px;
	font-weight: lighter;
	margin-bottom: 15px;
`;
const Second_li=styled.li`
	line-height: 1.3;
`;

const Second_a=styled.a`
	font-family: Helvetica;
	color: #a9a9a9;
	font-size: 14px;

`;
const Second_p=styled.p`
	font-family: Helvetica;
	color: #a9a9a9;
	font-size: 14px;
	padding: 30px 0px;

`;
const SecondStyled=styled.span`
	font-family: Helvetica;
	color: #a9a9a9;
	font-size: 14px;
	text-decoration: underline;
	&:hover{
    	background: #ffffff1a;
		cursor: pointer;
	}
`;
