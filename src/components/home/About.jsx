import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';

function About() {
  return (
    <AboutContainer>
        <AboutTop>
            <AboutHead>About Us</AboutHead>
            <AboutTitle>Learn more about our history, our business and sustainability initiatives</AboutTitle>
        </AboutTop>
        <AboutBottom>
            <About_ul>
                <About_li>
                    <About_a>
                        <AboutImages>
                            <AboutImage src="src\assets\images\a380-sky-view-w300x300.jpg" alt="Our business" />
                        </AboutImages>
                        <AboutTag>Our business</AboutTag>
                    </About_a>
                </About_li>
                <About_li>
                    <About_a>
                        <AboutImages>
                            <AboutImage src="src\assets\images\sunlight-baths-the-blyde-river-canyon-w300x300.jpg" alt="Our Planet" />
                        </AboutImages>
                        <AboutTag>Our planet</AboutTag>
                    </About_a>
                </About_li>
                <About_li>
                    <About_a>
                        <AboutImages>
                            <AboutImage src="src\assets\images\emirates-group-staff-group-photo-m300x300.jpg" alt="Our people" />
                        </AboutImages>
                        <AboutTag>Our people</AboutTag>
                    </About_a>
                </About_li>
                <About_li>
                    <About_a>
                        <AboutImages>
                            <AboutImage src="src\assets\images\family-planting-tree-w300x300.jpg" alt="Our communities" />
                        </AboutImages>
                        <AboutTag>Our communities</AboutTag>
                    </About_a>
                </About_li>
            </About_ul>
        </AboutBottom>
    </AboutContainer>
  )
}

export default About

//styling area

const AboutContainer=styled.section`
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
`;

const AboutTop=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const AboutHead=styled.h3`
    font-family: 'Emirates-Medium';
    color: black;
    font-size: 28px;
    letter-spacing: 0.3px;
    margin-bottom:20px;
`;

const AboutTitle=styled.h6`
    font-family: helvetica;
    font-size: 14px;
    font-weight: lighter;
    color: #333;
`;

const AboutBottom=styled.div`
    width: 75%;
    padding: 30px;
`;

const About_ul=styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

`;

const About_li=styled.li`
    width: 25%;
    
`;

const About_a=styled(Link)`
    width: 100%;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const AboutImages=styled.div`
    width: 165px;
    height: 165px;
    margin-bottom: 20px;

    ${About_a}:hover &{
        transform: scale(1.1);
        transition: 0.3s;
    }
    `;

const AboutImage=styled.img`
    border-radius: 50%;
    width: 100%;
    height: 100%;

    ${About_a}:hover &{
		box-shadow: 0 0 0.6rem 0 rgba(0,0,0,.5);  
    }
`;

const AboutTag=styled.p`
    font-family: helvetica;
    font-size: 14px;
    font-weight: bold;
    color: #333;
    text-decoration: underline;
`;
