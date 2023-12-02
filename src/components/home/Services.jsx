import React from 'react';
import styled from 'styled-components';
import { BsBuildings } from "react-icons/bs";
import { FaCar } from "react-icons/fa";
import { MdSurfing } from "react-icons/md";

export default function Services() {
  return (
    <ServicesContainer>
        <Services_ul>
            <Services_li>
                <Services_a>
                    <ServicesIcon><BsBuildings /></ServicesIcon>
                    <ServicesHead></ServicesHead>
                </Services_a>
            </Services_li>
            <Services_li>
                <Services_a>
                    <ServicesIcon><FaCar /></ServicesIcon>
                    <ServicesHead></ServicesHead>
                </Services_a>
            </Services_li>
            <Services_li>
                <Services_a>
                    <ServicesIcon><MdSurfing /></ServicesIcon>
                    <ServicesHead></ServicesHead>
                </Services_a>
            </Services_li>
            <Services_li>
                <Services_a>
                    <ServicesIcon></ServicesIcon>
                    <ServicesHead></ServicesHead>
                </Services_a>
            </Services_li>
            <Services_li>
                <Services_a>
                    <ServicesIcon></ServicesIcon>
                    <ServicesHead></ServicesHead>
                </Services_a>
            </Services_li>
            <Services_li>
                <Services_a>
                    <ServicesIcon></ServicesIcon>
                    <ServicesHead></ServicesHead>
                </Services_a>
            </Services_li>
            <Services_li>
                <Services_a>
                    <ServicesIcon></ServicesIcon>
                    <ServicesHead></ServicesHead>
                </Services_a>
            </Services_li>
            <Services_li>
                <Services_a>
                    <ServicesIcon></ServicesIcon>
                    <ServicesHead></ServicesHead>
                </Services_a>
            </Services_li>
        </Services_ul>
        
    </ServicesContainer>
  )
}

//styling

const ServicesContainer=styled.div`

`;

const Services_ul=styled.ul`

`;

const Services_li=styled.li`

`;

const Services_a=styled.div`

`;

const ServicesIcon=styled.div`

`;

const ServicesHead=styled.div`

`;