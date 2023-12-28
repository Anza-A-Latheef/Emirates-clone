import React from 'react'
import { Link } from 'react-scroll';
import styled from 'styled-components';
import Logoimage1 from '../../assets/images/apex-world-class-airline.svg'
import Logoimage2 from '../../assets/images/fgfa-star.svg'
import Logoimage3 from '../../assets/images/skytrax-badge-2019.svg'

const LogoSection = () => {
    return (
        <LogosContainer>
            <Logos_ul>
                <Logos_li>
                    <Logos_a>
                        <LogosImageContainer>
                            <LogosImage src={Logoimage1} alt="Official world class airline" />
                        </LogosImageContainer>
                    </Logos_a>
                </Logos_li>
            </Logos_ul>
            <Logos_ul>
                <Logos_li>
                    <Logos_a>
                        <LogosImageContainer>
                            <LogosImage src={Logoimage2} alt="Official Five star global airline" />
                        </LogosImageContainer>
                    </Logos_a>
                </Logos_li>
            </Logos_ul>
            <Logos_ul>
                <Logos_li>
                    <Logos_a>
                        <LogosImageContainer>
                            <LogosImage src={Logoimage3} alt="" />
                        </LogosImageContainer>
                    </Logos_a>
                </Logos_li>
            </Logos_ul>  
        </LogosContainer>
    )
}

export default LogoSection

//styling area

const LogosContainer=styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    border-bottom: 1px solid #d9d9d933; 

    @media (max-width: 786px) {
        flex-direction: column;
		align-items: center;
		width: 100%;
  }
    `;

const Logos_ul=styled.ul`
    width: 25%;

    @media (max-width: 786px) {
        flex-direction: column;
		align-items: center;
		width: 100%;
  }
`;

const Logos_li=styled.li`
    margin-bottom: 50px;
`;

const Logos_a=styled.a`
    cursor: pointer;
   
`;

const LogosImageContainer=styled.div`
    width: 240px;
    height: 80px;
    @media (max-width: 786px) {
        flex-direction: column;
		align-items: center;
		width: 100%;
  }
`;

const LogosImage=styled.img`
    width: 100%;
    height: 100%;
`;
