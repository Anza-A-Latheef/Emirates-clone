import React from 'react';
import styled from 'styled-components';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import FooterEnd from './FooterEnd';

const Footer = () => {
  	return (
    	<FooterContainer>
      		<Wrapper>
				<FirstSection/>
				<SecondSection/>
				<FooterEnd/>
      		</Wrapper>
    	</FooterContainer>
  	)
}

export default Footer

//styling area

const FooterContainer=styled.section`
  	background-color: #333333;
`;

const Wrapper=styled.div`
	padding: 0px 125px;
`;
