import React from 'react';
import styled from 'styled-components';
import { FaFacebookSquare ,FaLinkedin ,FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter, FaSquareYoutube } from "react-icons/fa6";
import appstore_logo from '../../assets/images/apple-en.svg';
import playstore_logo from '../../assets/images/google-en.svg';


const MediaSection = () => {
  return (
    <MediaContainer>
        <EmailInput>
            <Subscribe>
                <MailInput type="email" placeholder="Email address" />
                <MailSubmit type="submit">Subscribe</MailSubmit>
            </Subscribe>
        </EmailInput>
        <AppDownload>
            <Appstore src={appstore_logo} alt="Direct to AppStore" />
            <Playstore src={playstore_logo} alt="Direct to PlayStore" />
        </AppDownload>
        <MediaIcons>
            <MediaIcon><FaFacebookSquare /></MediaIcon>
            <MediaIcon><FaSquareXTwitter /></MediaIcon>
            <MediaIcon><FaLinkedin /></MediaIcon>
            <MediaIcon><FaSquareYoutube /></MediaIcon>
            <MediaIcon><FaInstagramSquare /></MediaIcon>
        </MediaIcons>
    </MediaContainer>
  )
}

export default MediaSection


//styling area

const MediaContainer=styled.div`
    width: 100%;
	display: flex;
	flex-wrap: wrap;
    align-items: center;
	justify-content: space-between;
	padding: 10px 0px; 
`; 

const EmailInput=styled.div`
    width: 33%;
    display: flex;
`;

const Subscribe=styled.form`
    display: flex;
    align-items: center;
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
`;

const AppDownload=styled.div`
    width: 33%;
    display: flex;

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