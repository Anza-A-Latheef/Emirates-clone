import React from 'react';
import styled from 'styled-components';


const Navbar = () => {
  return (
	<HeaderContainer>
		<div className='wrapper'>
			<LeftBox>
				<Logo>
					<LogoImage src ="src\assets\images\emirates-logo-badge.svg"/>
				</Logo>
				<NavElements>

				</NavElements>
			</LeftBox>
			<RightBox>
				<Button>rgll</Button>
				<Button>dga</Button>
				<Button>sddf</Button>
			</RightBox>
		</div>
	</HeaderContainer>
  )
}

const HeaderContainer = styled.div`
	background:#333333;
	width:100%;
	height:50px;
	display:flex;

`;
const LeftBox = styled.div`
	width:60%;
	height:100%;
	background:red;
`;

const Logo = styled.div`
	background:red;
	width:100px;
	height:150px;
	position:relative;
	z-index: 11;
	`;

const LogoImage=styled.img`
	width:100%;
	height:30px;
	position:absolute;
	bottom:0;
`;

const RightBox = styled.div`
	width:40%;
`;


const NavElements=styled.div``;

const Button=styled.button`
	background: #ffffff;
	color: black;
`;



export default Navbar



