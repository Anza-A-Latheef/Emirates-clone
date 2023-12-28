import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar';
import BookOptions from '../Nav-dropdown/book/BookOptions';
import Footer from '../footer/Footer';
import FeedBackPopup from '../FeedBackPopup';
import { FaArrowRightLong } from "react-icons/fa6";
import { VscSettings } from "react-icons/vsc";
import { useLocation } from 'react-router-dom';

const Book = () => {
    const location=useLocation();
    const { image,fare,airport} = location.state || {};
    console.log(airport);

  return (
    <BookContainer>
        <FixedComponent>
            <Navbar/>
            <BookOptions/>
        </FixedComponent>
        <FaresContainer>
            <FeaturedFaresHead>Featured Fares </FeaturedFaresHead>
            <FeaturedFaresSub>Find the best deals for Emirates flights. Featured Fares lists all our current flight specials. Bookmark this page and check back often for special flight offers.</FeaturedFaresSub>
            <FeaturedFareInput>
                <DestinationInput type="search" placeholder='Departure airport' />
                <ArrowIcon><StyledArrowRight /></ArrowIcon>
                <DestinationInput type="search" placeholder='Arrival airport' />
            </FeaturedFareInput>
        </FaresContainer>
        <FeaturedFareFilter>
            <FeaturedFilterTitle>Our top picks from Bengaluru (Bangalore) (BLR) to {airport}</FeaturedFilterTitle>
            <FilterButton><VscSettings /> Filter results</FilterButton>
        </FeaturedFareFilter>
        <FaresContainer>
            <Peak_p>*Peak surcharges may apply.</Peak_p>
            <DubaiFares>
                <DubaiImageContainer>
                    <DubaiImage src={image} alt="Dubai image" />
                </DubaiImageContainer>
                <DubaiFareDetail>
                    <DubaiHead>{airport}</DubaiHead>
                    <DubaiSubHeads>
                        <DubaiSubHead>Economy Class</DubaiSubHead>
                        <DubaiSubHead>From INR {fare}*</DubaiSubHead>
                    </DubaiSubHeads>
                    <FareDetails_ul>
                        <FareDetails_li>Return trip</FareDetails_li>
                        <FareDetails_li>For travel between 09 Jan 24 - 20 Jun 24</FareDetails_li>
                        <FareDetails_li>Fare expires in 5 days</FareDetails_li>
                        <FareDetails_li><FareCondition>Fare conditions</FareCondition></FareDetails_li>
                    </FareDetails_ul>
                </DubaiFareDetail>
                <SearchButton>Search for flights</SearchButton>
            </DubaiFares>
            <SearchResults>Showing 1 result(s)</SearchResults>
        </FaresContainer>
        <FooterCapContainer>
            <FooterCap>
                <Head_a><FootercapHead>Emirates</FootercapHead></Head_a>
                <FootercapTitle>Book a flight</FootercapTitle>
                <FootercapTitle>Featured Fares</FootercapTitle>
            </FooterCap>
        </FooterCapContainer>
        <Footer/>
        <FeedBackPopup/>
    </BookContainer>
  )
}

export default Book

const BookContainer=styled.section`
    display: flex;
    flex-direction: column;
`;

const FixedComponent=styled.section`
    position:fixed;
    top: 0;
`;

const FaresContainer=styled.div`
    padding: 20px 125px;
    background-image: url(https://c.ekstatic.net/ecl/backgrounds/featured-fares-background-image-desktop-4200x1560.png?h=tLiE2nqB6WO-Ixh5WMUI1A);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`;

const FeaturedFaresHead=styled.h2`
    padding-top: 155px;
    font-family: 'Emirates-Medium';
    font-size: 40px;
    color: #333;
    font-weight: lighter;
`;

const FeaturedFaresSub=styled.p`
    font-family: Helvetica;
    font-weight: lighter;
    color: #333;
    font-size: 17px;
    text-align: left;
    margin-top: 10px;
    width: 61%;
    line-height: 1.7;
`;

const FeaturedFareInput=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const DestinationInput=styled.input`
    font-family: Helvetica;
    margin: 30px 0px;
    width: 47%;
    min-height: 94px;
    border-radius: 5px;
    outline: none;
    border: 1px solid #ccc;
    padding-left: 30px;
    cursor: pointer;
    background-color: #fff;

    &::placeholder{
        font-size: 20px;
        color: #333;
    }

    &:hover{
        border: none;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
`;

const ArrowIcon=styled.div`
    border-radius: 50%;
    border:2px solid #999;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
`;

const StyledArrowRight=styled(FaArrowRightLong)`
    color: #999;
    font-size: 13px;
`;

const FeaturedFareFilter=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f9f9f9;
    height: 100px;
    width: 100%;
    padding: 0px 125px;
`;

const FeaturedFilterTitle=styled.h6`
    font-family: Helvetica;
    font-size: 21px;
    font-weight: lighter;
    letter-spacing: 0.5;
    color: #333;

`;

const FilterButton=styled.button`
    background-color: white;
    display: flex;
    align-items: center;
    gap: 10px;
    color: #999999;
    border: none;
    font-family: Helvetica;
    font-size: 16px;
    padding:  15px 20px;
`;

const Peak_p=styled.p`
    font-family: Helvetica;
    font-size: 15px;
    margin: 10px 0px 20px 0px;
    color: #333;
`;

const DubaiFares=styled.div`
    display: flex;
    background-color: #fff;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    &:hover{
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
`;


const DubaiImageContainer=styled.div`
    width: 380px;
    height: 210px;
    margin: 15px;
    `;

const DubaiImage=styled.img`
    width: 100%;
    height: 100%;
    border-radius: 7px;
    `;

const DubaiFareDetail=styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
    font-weight: 200;
    `;

const DubaiHead=styled.h6`
    font-family: Helvetica;
    font-weight: lighter;
    color: #333;
    font-size: 18px;
    text-align: left;
    line-height: 1.6;
    `;

const DubaiSubHeads=styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 0px;
    line-height: 1.5;
`;

const DubaiSubHead=styled.div`
    font-family: Helvetica;
    font-weight: lighter;
    color: #32753a;
    font-size: 17px;
`;

const FareDetails_ul=styled.ul`
    display: flex;
    flex-direction: column;
`;

const FareDetails_li=styled.li`
    font-family: Helvetica;
    line-height: 1.5;
    font-size: 15px;
    color: #333;
`;

const FareCondition=styled.span`
    text-decoration: underline;
`;

const SearchResults=styled.small`
    color: #999;
    font-size: 13px;
    line-height: 4.5;
    font-family: Helvetica;
`;

const SearchButton=styled.button`
    border-radius: 8px;
    border: 1px solid #444;
    background-color: #fff;
    font-size: 16px;
    height: 50px;
    padding: 20px 50px;
    letter-spacing: .5px;
    text-align: center;
    color: #444;
    font-weight: 400;
    display: flex;
    margin: 0px 25px;
    align-items: center;

    &:hover{
        background-color: #d71921;
        border-color: #d71921;
        color: #fff;
    }

`;

const FooterCapContainer =styled.div`
    width: 100%;
    padding: 10px 125px;
    background-color: #282828;
    z-index: -1;
`;

const FooterCap =styled.div`
    display: flex;
    align-items: center;

    &:nth-child(1){
        &:after{
        position: relative;
        top: 0;
        right: 123px;
        display: inline-block;
        width: 5px;
        height: 5px;
        margin-left: 15px;
        border-top: 1px solid #fff;
        border-right: 1px solid #fff;
        transform: rotate(45deg);
        content: "";
    }
    }
`;

const Head_a =styled.a`
    font-family: "Emirates-Medium";
    color: #fff;
    display: flex;
    opacity: .8;
    
    &:after{
        position: relative;
        top: 14px;
        display: inline-block;
        width: 5px;
        height: 5px;
        margin-left: 15px;
        border-top: 1px solid #fff;
        border-right: 1px solid #fff;
        transform: rotate(45deg);
        content: "";

    }
    &:hover{
    color: white;
    opacity: 1.8;
    text-decoration: underline;
}
    `;

const FootercapHead =styled.h2`
    font-weight: lighter;
    font-size: 22px;

`;

const FootercapTitle =styled.h6`
    font-family: 'Helvetica';
    color: #fff;
    opacity: .5;
    margin-left: 15px;
    font-size: 14px;
    font-weight: lighter;

`;