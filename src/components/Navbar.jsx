import React , {useState} from 'react';
import styled from 'styled-components';
import { FaGlobeEurope, FaRegUserCircle  } from "react-icons/fa";
import { VscTriangleDown } from "react-icons/vsc";
import { BiSearchAlt } from "react-icons/bi";
// import { Link } from 'react-router-dom';
import BookOptions from '../components/Nav-dropdown/book/BookOptions';
import ManageOptions from '../components/Nav-dropdown/manage/ManageOptions';
import ExperienceOptions from '../components/Nav-dropdown/experience/ExperienceOptions';
import FlyOptions from '../components/Nav-dropdown/where-we-fly/FlyOptions';
import LoyaltyOptions from '../components/Nav-dropdown/loyalty/LoyaltyOptions';
import HelpOptions from '../components/Nav-dropdown/help/HelpOptions';

const Navbar = () => {
	const [bookoption,setBookoption]=useState(false);
	const [manageoption,setManageoption]=useState(false);
	const [experienceoption,setExperienceoption]=useState(false);
	const [flyoption,setFlyoption]=useState(false);
	const [loyaltyoption,setLoyaltyoption]=useState(false);
	const [helpoption,setHelpoption]=useState(false);
	
  return (

	<HeaderContainer>
		<Wrapper>
			<LeftBox>
				<Logo>
					<LogoImage src ="src\assets\images\emirates-logo-badge.svg" alt="Emirates Logo"/>
				</Logo>
				<NavElements>
					<Nav_ul>
						<Nav_li onClick={()=>{
							setBookoption(!bookoption)
							setManageoption(false)
							setExperienceoption(false)
							setFlyoption(false)
							setLoyaltyoption(false)
							setHelpoption(false)
							}}>
							<Nav_a>book <Arrow_icon><VscTriangleDown /></Arrow_icon></Nav_a></Nav_li>
						<Nav_li onClick={()=>{
							setBookoption(false)
							setManageoption(!manageoption)
							setExperienceoption(false)
							setFlyoption(false)
							setLoyaltyoption(false)
							setHelpoption(false)
							}}>
							<Nav_a>manage <Arrow_icon><VscTriangleDown /></Arrow_icon></Nav_a></Nav_li>
						<Nav_li onClick={()=>{
							setBookoption(false)
							setManageoption(false)
							setExperienceoption(!experienceoption)
							setFlyoption(false)
							setLoyaltyoption(false)
							setHelpoption(false)
							}}>
							<Nav_a>experience <Arrow_icon><VscTriangleDown /></Arrow_icon></Nav_a></Nav_li>
						<Nav_li onClick={()=>{
							setBookoption(false)
							setManageoption(false)
							setExperienceoption(false)
							setFlyoption(!flyoption)
							setLoyaltyoption(false)
							setHelpoption(false)
							}}>
						<Nav_a>where we fly <Arrow_icon><VscTriangleDown /></Arrow_icon></Nav_a></Nav_li>
						<Nav_li onClick={()=>{
							setBookoption(false)
							setManageoption(false)
							setExperienceoption(false)
							setFlyoption(false)
							setLoyaltyoption(!loyaltyoption)
							setHelpoption(false)
							}}>
						<Nav_a>loyalty <Arrow_icon><VscTriangleDown /></Arrow_icon></Nav_a></Nav_li>
						<Nav_li onClick={()=>{
							setBookoption(false)
							setManageoption(false)
							setExperienceoption(false)
							setFlyoption(false)
							setLoyaltyoption(false)
							setHelpoption(!helpoption)
							}}>
						<Nav_a>help <Arrow_icon><VscTriangleDown /></Arrow_icon></Nav_a></Nav_li>
					</Nav_ul>
				</NavElements>
				{bookoption && <BookOptions/>}
				{manageoption && <ManageOptions/>}
				{experienceoption && <ExperienceOptions/>}
				{flyoption && <FlyOptions/>}
				{loyaltyoption && <LoyaltyOptions/>}
				{helpoption && <HelpOptions/>}
				
			</LeftBox>
			<RightBox>
				<Button><FaGlobeEurope /> IN <Arrow_icon><VscTriangleDown /></Arrow_icon></Button>
				<Button><BiSearchAlt /> <Arrow_icon><VscTriangleDown /></Arrow_icon></Button>
				{/* <Button><Link to="Login-page" style={{ textDecoration: 'none'}}><Login_a><FaRegUserCircle/> LOGIN <Arrow_icon><VscTriangleDown /></Arrow_icon></Login_a></Link></Button> */}
				<Button><Login_a><FaRegUserCircle/> LOGIN <Arrow_icon><VscTriangleDown /></Arrow_icon></Login_a></Button>
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

const Nav_a=styled.a`
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
	text-decoration: none;
	&:hover{
		background-color:#212121;
	}

`;
const Login_a=styled.a`
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	gap: 8px;
	text-decoration: none;
`;

const Arrow_icon=styled.div`

	position:absolute;
	bottom : 5px;
	display: none;
	flex-direction: column;
	align-items: center;
	font-size:10px;
	color: gray;

	${ Button }:hover & {
		display: flex;
	}
	${ Nav_a }:hover & {
		display: flex;
	}
`;

export default Navbar



