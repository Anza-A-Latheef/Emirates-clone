import React from 'react'
import { Link } from 'react-scroll';
import styled from 'styled-components';

const LogoSection = () => {
    return (
        <LogosContainer>
            <Logos_ul>
                <Logos_li>
                    <Logos_a>
                        <LogosImageContainer>
                            <LogosImage src="src\assets\images\apex-world-class-airline.svg" alt="Official world class airline" />
                        </LogosImageContainer>
                    </Logos_a>
                </Logos_li>
            </Logos_ul>
            <Logos_ul>
                <Logos_li>
                    <Logos_a>
                        <LogosImageContainer>
                            <LogosImage src="src\assets\images\fgfa-star.svg" alt="Official Five star global airline" />
                        </LogosImageContainer>
                    </Logos_a>
                </Logos_li>
            </Logos_ul>
            <Logos_ul>
                <Logos_li>
                    <Logos_a>
                        <LogosImageContainer>
                            <LogosImage src="src\assets\images\skytrax-badge-2019.svg" alt="" />
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
    `;

const Logos_ul=styled.ul`
    width: 25%;
`;

const Logos_li=styled.li`
    margin-bottom: 50px;
`;

const Logos_a=styled(Link)`
    cursor: pointer;
`;

const LogosImageContainer=styled.div`
    width: 240px;
    height: 80px;
`;

const LogosImage=styled.img`
    width: 100%;
    height: 100%;
`;
