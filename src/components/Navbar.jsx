import React from 'react';
import styled from 'styled-components';
import { FaGlobeEurope, FaRegUserCircle  } from "react-icons/fa";
import { VscTriangleDown } from "react-icons/vsc";
import { BiSearchAlt } from "react-icons/bi";
import { Link } from 'react-scroll';

const Navbar = () => {

  return (
	<HeaderContainer>
		<Wrapper>
			<LeftBox>
				<Logo>
					<LogoImage src ="src\assets\images\emirates-logo-badge.svg" alt="Emirates Logo"/>
				</Logo>
				<NavElements>
					<Nav_ul>
						<Nav_li><Nav_a>book <Arrow_icon><VscTriangleDown /></Arrow_icon></Nav_a></Nav_li>
						<Nav_li><Nav_a>manage <Arrow_icon><VscTriangleDown /></Arrow_icon></Nav_a></Nav_li>
						<Nav_li><Nav_a>experience <Arrow_icon><VscTriangleDown /></Arrow_icon></Nav_a></Nav_li>
						<Nav_li><Nav_a>where we fly <Arrow_icon><VscTriangleDown /></Arrow_icon></Nav_a></Nav_li>
						<Nav_li><Nav_a>loyalty <Arrow_icon><VscTriangleDown /></Arrow_icon></Nav_a></Nav_li>
						<Nav_li><Nav_a>help <Arrow_icon><VscTriangleDown /></Arrow_icon></Nav_a></Nav_li>
					</Nav_ul>
				</NavElements>
			</LeftBox>
			<RightBox>
				<Button><FaGlobeEurope /> IN <Arrow_icon><VscTriangleDown /></Arrow_icon></Button>
				<Button><BiSearchAlt /> <Arrow_icon><VscTriangleDown /></Arrow_icon></Button>
				<Button><FaRegUserCircle/> LOGIN <Arrow_icon><VscTriangleDown /></Arrow_icon></Button>
			</RightBox>
		</Wrapper>
	</HeaderContainer>
  )
}

//styling area

const HeaderContainer = styled.section`
	background:#333333;
	width:100%;
	display:flex;
	position: relative;

`;

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding:0px 125px ;
	width: 100vw;
`;

const LeftBox = styled.div`
	display: flex;
`;

const Logo = styled.div`
	cursor: pointer;
	background:#d71921;
	width:90px;
	height:125px;
	position:absolute;
	top: 0;
	display: flex;
	align-items:end;
	z-index: 11;
	padding-bottom: 5px;
	box-sizing: border-box;
`;

const LogoImage=styled.img`
	width:100%;
`;

const NavElements=styled.div`
	display:flex;
	align-items: center;
`;

const Nav_ul=styled.ul`
	display: flex;
	padding-left: 110px;
`;

const Nav_li=styled.li`
	list-style: none;
	white-space: nowrap;
`;

const Nav_a=styled(Link)`
	cursor: pointer;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-transform: uppercase;
	color: white;
	font-weight: 700;
	font-size: 13px;
	font-family: Helvetica;
	letter-spacing: 0.5px;
	padding: 20px 10px;
	&:hover{
		background-color:#212121;
	}
`;

const RightBox = styled.div`
	display: flex;
	padding: 0px 10px;
`;

const Button=styled.button`
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	background: transparent;
	color: white;
	border: none;
	font-size:14px;
	font-weight: bolder;
	font-family: Helvetica;
	letter-spacing: 0.5px;
	gap: 8px;
	padding: 20px 10px;
	&:hover{
		background-color:#212121;
	}

`;

const Arrow_icon=styled.div`

	position:absolute;
	bottom : 5px;
	display: none;
	align-items: center;
	font-size:10px;
	color: gray;

	${ Button }:hover & {
		display: block;
	}
	${ Nav_a }:hover & {
		display: block;
	}
`;

export default Navbar



