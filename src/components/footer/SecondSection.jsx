import React from 'react';
import styled from 'styled-components';
import LogoSection from './LogoSection';
import { FaFacebookSquare ,FaLinkedin ,FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter, FaSquareYoutube } from "react-icons/fa6";
import appstore_logo from '../../assets/images/apple-en.svg';
import playstore_logo from '../../assets/images/google-en.svg';

const SecondSection = () => {
	return (
		<>
		<SecondContainer>
			<Second_ul>
				<SecondHead>Subscribe to our special offers</SecondHead>
				<Second_li><Second_a>Save with our latest fares and offers.</Second_a></Second_li>
				<Second_li><SecondStyled>Unsubscribe or change your preferences</SecondStyled></Second_li>
				<EmailInput>
					<Subscribe>
						<MailInput type="email" placeholder="Email address" />
						<MailSubmit type="submit">Subscribe</MailSubmit>
					</Subscribe>
        		</EmailInput>
			</Second_ul>
			<Second_ul>
				<SecondHead>Emirates App</SecondHead>
				<Second_li><Second_a>Book and manage your flights on the go.</Second_a></Second_li>
				<AppDownload>
					<Appstore src={appstore_logo} alt="Direct to AppStore" />
					<Playstore src={playstore_logo} alt="Direct to PlayStore" />
				</AppDownload>
			</Second_ul>
			<Second_ul>
				<SecondHead>Connect with us</SecondHead>
				<Second_li><Second_a>Share your Emirates experience.</Second_a></Second_li>
				<MediaIcons>
					<MediaIcon><FaFacebookSquare /></MediaIcon>
					<MediaIcon><FaSquareXTwitter /></MediaIcon>
					<MediaIcon><FaLinkedin /></MediaIcon>
					<MediaIcon><FaSquareYoutube /></MediaIcon>
					<MediaIcon><FaInstagramSquare /></MediaIcon>
				</MediaIcons>
			</Second_ul>
		</SecondContainer>
			<Second_p>For details on how we use your information, please see <br/>our <SecondStyled>Privacy policy</SecondStyled></Second_p>
			<LogoSection/>
		</>
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
	row-gap: 30px;

	@media (max-width: 980px) {
		flex-direction: column;
		width: 100%;
  }
	@media (max-width: 786px) {
		align-items: center;
		width: 100%;
  }

`;

const Second_ul=styled.ul`
	width: 33%;
	min-width: fit-content;

	@media (max-width: 980px) {
		width: 100%;
  }
  @media (max-width: 786px) {
		align-items: center;
		width: 100%;
		justify-content: center;
		text-align: center;
  }
	
`;

const SecondHead=styled.h4`
	font-family: "Emirates-Medium";
	color: white;
	font-size: 18px;
	font-weight: lighter;
	margin-bottom: 15px;

	@media (max-width: 786px) {
			display: none;
		}
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

	@media (max-width: 786px) {
			padding-top: 20px;
			width:100%;
			justify-content: center;
			text-align: center;
		}
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
const EmailInput=styled.div`
    width: 33%;
    display: flex;
	padding-top: 10px;
	@media (max-width: 786px) {
		padding-top: 20px;
			width:100%;
		}
`;

const Subscribe=styled.form`
    display: flex;
    align-items: center;

	@media (max-width: 786px) {
			width:100%;
			flex-direction: column;
			align-items: center;
		}
`;
const MailInput=styled.input`
    height: 40px;
    width: 220px;
    padding-left: 10px;
    margin-right: 10px;
    border: 0;
    outline: 0;
    border-radius: 3px;

    &::placeholder{
        font-size: 16px;
        color: #333333;
    }
	
	@media (max-width: 786px) {
			width:100%;
			flex-direction: column;
		}
`;

const MailSubmit=styled.button`
    background: transparent;
    border:1px solid white;
    font-family: Helvetica;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;

    &:hover{
        background: #fff;
        color: #333;
        cursor: pointer;
    }

	@media (max-width: 786px) {
			margin-top: 30px;
			width: 100%;
		}
`;

const AppDownload=styled.div`
    width: 33%;
    display: flex;
	padding-top: 30px;

	@media (max-width: 786px) {
			padding-top: 20px;
			width:100%;
			justify-content: center;
		}
`;

const Appstore=styled.img`
    margin-right: 15px;
    border-radius: 3px;
    cursor: pointer;
    `;

const Playstore=styled.img`
    border-radius: 3px;
    cursor: pointer;
`;

const MediaIcons=styled.div`
    width: 33%;
    display: flex;
    align-items: center;
	padding-top: 30px;
	@media (max-width: 786px) {
			padding-top: 20px;
			width:100%;
			justify-content: center;
		}

`;

const MediaIcon=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    width: 40px;
    height: 40px;
    margin: 5px;
    background-color: white;
    font-size: 50px;
    cursor: pointer;
`;