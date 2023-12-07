import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { BsBuildings } from "react-icons/bs";
import { FaCar,FaBusAlt } from "react-icons/fa";
import { MdSurfing } from "react-icons/md";
import { TbBeach } from "react-icons/tb";
import { GrUserPolice } from "react-icons/gr";
import { FaHandshake } from "react-icons/fa6";
import { IoTrainSharp } from "react-icons/io5";
import { HiExternalLink } from "react-icons/hi";

export default function Services() {
  return (
    <ServicesContainer>
        <Services_ul>
            <Services_li>
                <Services_a>
                    <ServicesIcon><BsBuildings /></ServicesIcon>
                    <ServicesHead>Hotels <HiExternalLink /></ServicesHead>
                </Services_a>
            </Services_li>
            <Services_li>
                <Services_a>
                    <ServicesIcon><FaCar /></ServicesIcon>
                    <ServicesHead>Car rentals <HiExternalLink /></ServicesHead>
                </Services_a>
            </Services_li>
            <Services_li>
                <Services_a>
                    <ServicesIcon><MdSurfing /></ServicesIcon>
                    <ServicesHead>Tours & activities <HiExternalLink /></ServicesHead>
                </Services_a>
            </Services_li>
            <Services_li>
                <Services_a>
                    <ServicesIcon><TbBeach /></ServicesIcon>
                    <ServicesHead>Book a holiday <HiExternalLink /></ServicesHead>
                </Services_a>
            </Services_li>
            <Services_li>
                <Services_a>
                    <ServicesIcon><GrUserPolice /></ServicesIcon>
                    <ServicesHead>Chauffeur-drive </ServicesHead>
                </Services_a>
            </Services_li>
            <Services_li>
                <Services_a>
                    <ServicesIcon><FaHandshake /></ServicesIcon>
                    <ServicesHead>Meet & Greet <HiExternalLink /></ServicesHead>
                </Services_a>
            </Services_li>
            <Services_li>
                <Services_a>
                    <ServicesIcon><FaBusAlt /></ServicesIcon>
                    <ServicesHead>Airport transfers <HiExternalLink /></ServicesHead>
                </Services_a>
            </Services_li>
            <Services_li>
                <Services_a>
                    <ServicesIcon><IoTrainSharp /></ServicesIcon>
                    <ServicesHead>Eurail <HiExternalLink /></ServicesHead>
                </Services_a>
            </Services_li>
        </Services_ul>
    </ServicesContainer>
  )
}

//styling

const ServicesContainer=styled.section`
    padding:0px 125px;
    `;

const Services_ul=styled.ul`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    background-color: white;
    border: solid  #bdbbbb;
    border-width: 1px 0px 1px 1px;
    
`;

const Services_li=styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 12.5%;
    white-space:normal;
    border: solid #bdbbbb;
    border-bottom:3px solid white;
    border-width: 0px 1px 3px 0px;
    padding: 10px;
    box-sizing: border-box;

    &:hover{
        border-bottom: #d71921 3px solid;
    }
`;

const Services_a=styled(Link)`
    text-align: center;
    text-decoration: underline;
    color: #a9a9a9;
    font-size: 16px;

    ${Services_li}:hover &{
        color: #000000;
        text-decoration: none;
        font-weight: bold;
    }
`;

const ServicesIcon=styled.div`
    font-size: 30px;
    color: #a9a9a9;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    ${Services_li}:hover &{
        color: #000000;
    }
`;

const ServicesHead=styled.div`

`;