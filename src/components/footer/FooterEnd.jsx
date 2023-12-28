import React from 'react';
import styled from 'styled-components';
import { MdOutlineCopyright } from "react-icons/md";
import logobadge from '../../assets/images/emirates-logo-badge.svg'

const FooterEnd = () => {
  return (
    <FooterEndContainer>
        <Footerend_ul>
            <Footerend_li><Footerend_a>Accessibility statement</Footerend_a></Footerend_li>
            <Footerend_li><Footerend_a>Contact us</Footerend_a></Footerend_li>
            <Footerend_li><Footerend_a>Privacy policy</Footerend_a></Footerend_li>
            <Footerend_li><Footerend_a>Terms and conditions</Footerend_a></Footerend_li>
            <Footerend_li><Footerend_a>Cookie Policy</Footerend_a></Footerend_li>
            <Footerend_li><Footerend_a>Cybersecurity</Footerend_a></Footerend_li>
            <Footerend_li><Footerend_a>Modern Slavery Act transparency statement</Footerend_a></Footerend_li>
            <Footerend_li><Footerend_a>Sitemap</Footerend_a></Footerend_li>
        </Footerend_ul>
        <Right><MdOutlineCopyright /> 2023 The Emirates Group. All Rights Reserved.</Right>
        <LogoEnd>
			<LogoEndImage src ={logobadge} alt="Emirates Logo"/>
		</LogoEnd>
    </FooterEndContainer>
    
  )
}

export default FooterEnd

//styled area

const FooterEndContainer=styled.div`
    position: relative;
    display: block;
    width: 100%;
`;

const Footerend_ul=styled.ul`
    width: 66%;
	display: flex;
	flex-wrap: wrap;
    margin-bottom: 10px;

    @media (max-width: 786px) {
        flex-direction: column;
  }
`;

const Footerend_li=styled.li`
    margin: 0px 10px;
    line-height: 1.5;
`;

const Footerend_a=styled.a`
    font-family: Helvetica;
	color: #a9a9a9;
	font-size: 14px;

	&:hover{
		text-decoration: underline;
    	background: #ffffff1a;
		cursor: pointer;
	}
`;

const Right=styled.p`
    font-family: Helvetica;
	color: white;
	font-size: 12px;
    font-weight: bold;
    padding-bottom: 15px;

    @media (max-width: 480px) {
        width: 50%;
        white-space: break-spaces;

  }
`;

const LogoEnd = styled.div`
	cursor: pointer;
	background:#d71921;
	width:90px;
	height:125px;
	position:absolute;
	bottom: 0;
    right: 0;
	display: flex;
	align-items:end;
	z-index: 11;
	padding-bottom: 5px;
	box-sizing: border-box;

    @media (max-width: 786px) {
        flex-direction: column;
		width:60px;
	    height:80px;
  }
`;

const LogoEndImage=styled.img`
	width:100%;
    position: absolute;
    top: 10px;
`;
