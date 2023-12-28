import React, { useState } from 'react';
import styled from 'styled-components';
import place1 from '../../../assets/images/Place1.avif'
import place2 from '../../../assets/images/Place2.avif'
import place3 from '../../../assets/images/Place3.avif'
import place4 from '../../../assets/images/Place4.avif'
import { useNavigate } from 'react-router-dom';

const Pricecard = () => {

    const [PlaceDetails,setPlaceDetails]=useState([
        {
            "id": 1,
            "image": place1,
            "country": "Spain",
            "placeName": "Barcelona",
            "fare":" 124,609",
            "airport": "Barcelona (BCN)"
        },
        {
            "id": 2,
            "image": place2,
            "country": "United Arab Emirates",
            "placeName": "Dubai",
            "fare":"25,956",
            "airport": "Dubai (DXB)"
        },
        {
            "id": 3,
            "image": place3,
            "country": "Italy",
            "placeName": "Rome",
            "fare":"94,626",
            "airport": "Rome (FCO)"
        },
        {
            "id": 4,
            "image": place4,
            "country": "United Kingdom",
            "placeName": "London",
            "fare":"64,647",
            "airport": "London (LHR)"
          }
    ]);

    const navigate=useNavigate();
    const handleClick=(cardId, cardImage,cardFare,cardAirport)=>{
        navigate(`/singleitem`,{state:{id:cardId, image:cardImage ,fare:cardFare,airport:cardAirport}})
    }

    return (
        <PricecardContainer>
            {PlaceDetails.map((place) => {
                return ( <PriceCard key={place.id} onClick={()=>{
                    handleClick(place.id,place.image,place.fare,place.airport)
                }}>
                 <CardTop>
                     <DestinationImage>
                         <Destination src={place.image} alt="Place image" />
                     </DestinationImage>
                 </CardTop>
                 <CardBottom>
                     <CardTitle>
                         <DestinationCountry>{place.country}</DestinationCountry>
                         <DestinationPlace>{place.placeName}</DestinationPlace>
                         <Discover>Discover for yourself</Discover>
                     </CardTitle>
                 </CardBottom>
             </PriceCard>)
         })
        }
        </PricecardContainer>
  )
}

export default Pricecard

//styling area

const PricecardContainer=styled.div`
    padding: 40px 0px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    width: 100%;
    gap: 50px;
`;

const PriceCard=styled.a`
    border-radius: 5px;
    width: 100%;
    cursor: pointer;
    background-color: white;
    box-shadow: 0 0.2rem 0.4rem 0.2rem rgba(0,0,0,.1);

    &:hover{
        box-shadow: 0 0 0.6rem 0 rgba(12, 0, 0, 0.5);
    }
`;

const CardTop=styled.div`
    width: 100%;
`;

const DestinationImage=styled.div`
    width: 100%;
    height:180px;
`;

const Destination=styled.img`
    width: 100%;
`;

const CardBottom=styled.div`
    padding:10px 0px;
`;

const CardTitle=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const DestinationCountry=styled.h6`
    font-family: 'Dhurjati';
    text-transform: uppercase;
    font-size: 13.5px;
    font-weight: lighter;
    letter-spacing: .3rem;
    color:#666666;
    line-height: 2.15;
`;

const DestinationPlace=styled.h4`
    font-family: 'Emirates-Medium';
    color: #333333;
    font-size: 25px;
`;

const Discover=styled.h5`
    font-family: Helvetica;
    color: #333333;
    font-size: 15px;
    margin: 20px;
`;