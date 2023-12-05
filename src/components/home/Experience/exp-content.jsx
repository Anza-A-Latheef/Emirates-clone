import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import img1 from "../../../assets/images/skyline-view-from-la-mer-dubai-d800x600.jpg";
import img2 from "../../../assets/images/first-class-dessert-w800x600.jpg";
import img3 from "../../../assets/images/business-class-meal-w800x600.jpg";
import img4 from "../../../assets/images/premium-economy-menu-w800x600.jpg";
import img5 from "../../../assets/images/economy-class-chocolate-dessert-w800x600.jpg";

function ExpContent() {
  return (
    <ExperienceContainer>
		<DiscoverDubai>
			<GridTitle>dubai and the uae</GridTitle>
			<DubaiHead>Discover Dubai</DubaiHead>
			<ExpLink>Learn more</ExpLink>
		</DiscoverDubai>
		<CabinFeatures>
			<FirstClass>
				<GridTitle>cabin features</GridTitle>
				<CabinHead>First Class</CabinHead>
				<ExpLink>Learn more</ExpLink>
			</FirstClass>
			<BusinessClass>
				<GridTitle>cabin features</GridTitle>
				<CabinHead>Business Class</CabinHead>
				<ExpLink>Learn more</ExpLink>
			</BusinessClass>
			<PremiumEconomy>
				<GridTitle>cabin features</GridTitle>
				<CabinHead>Premium Economy</CabinHead>
				<ExpLink>Learn more</ExpLink>
			</PremiumEconomy>
			<EconomyClass>
				<GridTitle>cabin features</GridTitle>
				<CabinHead>Economy Class</CabinHead>
				<ExpLink>Learn more</ExpLink>
			</EconomyClass>
		</CabinFeatures>
    </ExperienceContainer>
  )
}

export default ExpContent

//styling area

const ExperienceContainer=styled.div`
	display: flex;
	width: 100%;
	padding-bottom: 62px;
`;

const DiscoverDubai=styled.div`
	background-image: url(${img1});
    width: 50%;
	height: 538px;
    background-position: top;
    background-size: cover;
	margin-right: 5px;
	border: 1px solid #cccccc;
	padding: 40px 50px;

	&:hover{
		box-shadow: 0 0 0.6rem 0 rgba(0,0,0,.5);
		cursor: pointer;
	}

`;

const CabinFeatures=styled.div`
	width: 50%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;
`;

const FirstClass=styled.div`
	background-image: url(${img2});
    background-position:bottom;
	background-repeat: no-repeat;
	background-color: #ffffff;
    background-size: contain;
	margin: 0px 5px 10px 5px;
	padding: 15px;
	border: 1px solid #cccccc;
	display: flex;
	flex-direction: column;
	align-items: center;

	&:hover{
		box-shadow: 0 0 0.6rem 0 rgba(0,0,0,.5);
		cursor: pointer;
	}

`;

const BusinessClass=styled.div`
	background-image: url(${img3});
	background-position:bottom;
	background-repeat: no-repeat;
	background-color: #ffffff;
    background-size: contain;
	margin: 0px 5px 10px 5px;
	padding: 15px;
	border: 1px solid #cccccc;
	display: flex;
	flex-direction: column;
	align-items: center;

	&:hover{
		box-shadow: 0 0 0.6rem 0 rgba(0,0,0,.5);
		cursor: pointer;
	}

`;

const PremiumEconomy=styled.div`
	background-image: url(${img4});
	background-position:bottom;
	background-repeat: no-repeat;
	background-color: #ffffff;
    background-size: contain;
	margin: 0px 5px 10px 5px;
	padding: 15px;
	border: 1px solid #cccccc;
	display: flex;
	flex-direction: column;
	align-items: center;

	&:hover{
		box-shadow: 0 0 0.6rem 0 rgba(0,0,0,.5);
		cursor: pointer;
	}

`;

const EconomyClass=styled.div`
	background-image: url(${img5});
	background-position:bottom;
	background-repeat: no-repeat;
	background-color: #ffffff;
    background-size: contain;
	margin: 0px 5px 10px 5px;
	padding: 15px;
	border: 1px solid #cccccc;
	display: flex;
	flex-direction: column;
	align-items: center;

	&:hover{
		box-shadow: 0 0 0.6rem 0 rgba(0,0,0,.5);
		cursor: pointer;
	}

`;

const GridTitle=styled.h6`
	font-family: 'Dhurjati';
    text-transform: uppercase;
    font-size: 13.5px;
    font-weight: lighter;
    letter-spacing: .3rem;
    color:#666666;
    line-height: 2.15;
`;

const DubaiHead=styled.h2`
 	font-family: 'Emirates-Medium';
    color: #333333;
    font-size: 50px;
    line-height: 5.75rem;

	&::after{
        content: "";
        position: relative;
        display: block;
        background-color: #d71921;
        width: 65px;
        height: 2px;
        margin-bottom: 8px;
    }
`;

const ExpLink=styled(Link)`
	font-size: 14px;
	color: #666666;
`;

const CabinHead=styled.h3`
	font-family: 'Emirates-Medium';
    color: #333333;
    font-size: 25px;

	&::after{
        content: "";
        position: relative;
        display: block;
        background-color: #d71921;
        width: 60px;
        height: 2px;
        margin: auto;
        margin-bottom: 8px;
    }
`;