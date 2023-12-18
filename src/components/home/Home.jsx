import React ,{useState} from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar';
import Spotlight from './Spotlight';
import Tabs from "../home/Tabs-section/Tabs";
import Services from './Services';
import Bestprice from './Bestprice/Bestprice';
import Offer from './Offer';
import Experience from './Experience/Exp-head';
import About from './About';
import Footer from '../footer/Footer';
import { VscFeedback } from "react-icons/vsc";
import FeedBackPopup from '../FeedBackPopup';


const Home = () => {

  const [popupVisible,setPopupVisible]=useState(false);
  const togglePopup=()=>{
    setPopupVisible(!popupVisible);
  }

  return (
    <>
      <HomeContainer>
        <Navbar/>
        <Spotlight/>
        <Tabs/>
        <Services/>
        <Bestprice/>
        <Offer/>
        <Experience/>
        <About/>
        {/* <FeedBackPopup/> */}
        <Footer/>
      </HomeContainer>
      <Feedback onClick={togglePopup}><StyledIcon /> Feedback</Feedback>
      {popupVisible && <FeedBackPopup onClose={togglePopup} />}
    </>
  )
}

export default Home

const HomeContainer=styled.section`
  background-color: #f6f6f6;
  position: relative;
`;
const Feedback=styled.button`
    display: flex;
    background-color: white;
    border-radius: 3px 3px 0 0;
    box-shadow: 0 1px 4px 1px #666;
    color: #333;
    cursor: pointer;
    font-family: Helvetica;
    font-size: 14px;
    height: 40px;
    border: none;
    padding: 10px 15px 25px 25px;
    position: fixed;
    right: 0;
    top: calc(50% - 120px);
    transform: rotate(-90deg);
    transform-origin: 100% 100%;
    `;
const StyledIcon = styled(VscFeedback)`
    font-weight: bold;
    margin-right: 8px; 
    color: #333;
    font-size: 1.2rem;
    transform: rotate(90deg);

`;


