import React from 'react';
import styled from 'styled-components';
import BookContent from './BookContent';
import AboutBooking from './AboutBooking';

const BookOptions = () => {
    
  return (
    <>
        <BookoptionContainer>
            <BookOption>
                <BookOption_ul>
                        <BookOption_li>
                            <BookOption_a>Book</BookOption_a>
                            <BookContentWrapper>
                                <BookContent />
                            </BookContentWrapper>
                        </BookOption_li>
                        <BookOption_li>
                            <BookOption_a>About booking online</BookOption_a>
                                <AboutBookingWrapper>
                                    <AboutBooking />
                                </AboutBookingWrapper>
                        </BookOption_li>
                </BookOption_ul>
                <BookOption_btn type='submit' >Search flights</BookOption_btn>
            </BookOption>
        </BookoptionContainer>
    </>
  )
}

export default BookOptions

//styling area

const BookoptionContainer=styled.div`
    display: flex;
    flex-direction: column;
`;

const BookOption=styled.div`
    position:absolute;
    width:100%;
    z-index: 1;
    background: #f9f9f9;
    border-bottom: 1px solid #ababab;
    padding: 0px 128px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: .5s ease-in-out;
    left: 0;
    top:55px;
`;
const BookOption_ul=styled.ul`
    display: flex;
    padding: 0;
    box-sizing: border-box;
    padding: 0px 100px;
`;
const BookOption_li=styled.li`
    height: 50px;
    line-height: 50px;
    max-width: none;
    vertical-align: top;
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
    border-bottom: 1px solid transparent;
    text-align: left;

    &:hover{
        border-left: 1px solid #ababab;
        border-right: 1px solid #ababab;
        background-color: white;
    }
`;

const BookContentWrapper = styled.div`
  display: none;

  ${ BookOption_li }:hover & {
    display: flex;
    margin: 200px 0;
  }
`;

const AboutBookingWrapper = styled.div`
  display: none;

  ${BookOption_li}:hover & {
    display: flex;
  }
`;


const BookOption_a=styled.a`
    padding:0px 20px;
    font-size: 15px;
    font-family: Helvetica;
    color: #333;
`;
const BookOption_btn=styled.button`
    cursor: pointer;
	display: flex;
    height: 35px;
	align-items: center;
	justify-content: center;
	background: #d71921;
    border-radius:3px;
	color: white;
	border: none;
	font-size:14px;
	font-family: Helvetica;
	padding: 0px 10px;

    &:hover{
        box-shadow: rgba(80, 77, 77, 0.35) 0px 5px 15px;

    }
`;
