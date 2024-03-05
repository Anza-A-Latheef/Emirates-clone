import React ,{useContext} from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { FullNameContext } from './SearchPage';

const Options = () => {
    const { departure, arrival,classes } = useParams();
    const {fullName} =useContext(FullNameContext);
  return (
    <div>
        <Benefits>
            <BenefitsHead>Your benefits</BenefitsHead>
            <BenefitsP>Your included benefits depend on your selected class and fare and your memebership tier. Click on any of the cards for more information.</BenefitsP>
            <BenefitsCards>
                <BenefitsCard>
                    <BenefitsImgCont>
                        <BenefitsImg src="https://fly2.ekstatic.net/media/checked_baggage_tcm91-154667.svg" alt=""/>
                    </BenefitsImgCont>
                    <CardTitle>Baggage allowance</CardTitle>
                    <BaggageWeight>2x23kg</BaggageWeight>
                </BenefitsCard>
                <BenefitsCard>
                    <BenefitsImgCont>
                        <BenefitsImg src="https://fly2.ekstatic.net/media/ice_tcm91-154656.svg" alt=""/>
                    </BenefitsImgCont>
                    <CardTitle>Inflight entertainment</CardTitle>
                </BenefitsCard>
                <BenefitsCard>
                    <BenefitsImgCont>
                        <BenefitsImg src="https://fly2.ekstatic.net/media/hot_meals_tcm91-154660.svg" alt=""/>
                    </BenefitsImgCont>
                    <CardTitle>Economy Class dining</CardTitle>
                </BenefitsCard>
                <BenefitsCard>
                    <BenefitsImgCont>
                        <BenefitsImg src="https://fly2.ekstatic.net/media/stay_connected_gsm_tcm91-154663.svg" alt=""/>
                    </BenefitsImgCont>
                    <CardTitle>Stay connected</CardTitle>
                </BenefitsCard>
                <BenefitsCard>
                    <BenefitsImgCont>
                        <BenefitsImg src="https://fly2.ekstatic.net/media/award_tcm91-154665.svg" alt=""/>
                    </BenefitsImgCont>
                    <CardTitle>Award winning service</CardTitle>
                </BenefitsCard>
            </BenefitsCards>
        </Benefits>
        <Recommended>
            <RecommendedHead>Recommended for you</RecommendedHead>
            <RecommendedTitle>Enhance your travel experience with these options.</RecommendedTitle>
            <RecommendedCards>
                <RecommendedCard>
                    <RecommCardLeft>
                        <RecommCardImg alt="" src="https://fly2.ekstatic.net/media/Seat_selection_712x632_tcm91-153808.jpg"/>
                    </RecommCardLeft>
                    <RecommCardRight>
                        <RecommCardTitle>Choose seats</RecommCardTitle>
                        <RecommContentOne>Choose a seat based on your preferences:</RecommContentOne>
                        <RecommContent>Choose an aisle seat for quick access or a window seat for a great view</RecommContent>
                        <RecommContent>Preferred seats are located at the front of the aircraft or on the upper deck of some of our A380 flights, so you'll be one of the first passengers to disembark</RecommContent>
                        <RecommContent>Choose twin seats if you'd like to sit in a two-seater row</RecommContent>
                        <RecommContent>Choose extra legroom and stretch your legs - book now and save more compared to what you would pay at the airport</RecommContent>
                        <RecommCardButton>Choose seats</RecommCardButton>
                    </RecommCardRight>
                </RecommendedCard>
                <RecommendedCard>
                    <RecommCardLeft>
                        <RecommCardImg alt="" src="	https://fly4.emirates.com/media/baggage%402x_tcm223-154177.png"/>
                    </RecommCardLeft>
                    <RecommCardRight>
                        <RecommCardTitle>Add excess baggage now and save money and time at the airport</RecommCardTitle>
                        <RecommContent>By adding excess baggage now, you can save more with special discounts compared to what you would pay at the airport.</RecommContent>
                        <RecommContent>From <b>INR 11,319</b></RecommContent>
                    </RecommCardRight>
                </RecommendedCard>
            </RecommendedCards>
        </Recommended>
        <BaggageDetails>
            <BaggageBox>
                <BaggageBoxHead>
                    <BaggageAirport>{departure} to {arrival}</BaggageAirport>
                    <BaggageClass>{classes.slice(0,-6)} Saver</BaggageClass>
                </BaggageBoxHead>
                <BaggageBoxContent>
                    <PassengerBaggage>
                        <PassengerName>{fullName}</PassengerName>
                        <BaggageAllowance>Complimentary baggage allowance: <b>2 x 23kg</b></BaggageAllowance>
                    </PassengerBaggage>
                    <AdditionalBaggage>
                        <AddBaggageLabel>Additional baggage</AddBaggageLabel>
                        <AddBaggageSelect>
                            <option value=" No extra baggage" onChange={()=>{}}>No extra baggage</option>
                            <option value=" 1 additional bag" onChange={()=>{}}>1 additional bag</option>
                            <option value=" 2 additional bags" onChange={()=>{}}>2 additional bags</option>
                            <option value=" 3 additional bags" onChange={()=>{}}>3 additional bags</option>
                            <option value=" 4 additional bags" onChange={()=>{}}>4 additional bags</option>
                            <option value=" 5 additional bags" onChange={()=>{}}>5 additional bags</option>
                        </AddBaggageSelect>
                    </AdditionalBaggage>
                </BaggageBoxContent>
            </BaggageBox>
            <BaggageBox>
                <BaggageBoxHead>
                    <BaggageAirport>{arrival} to {departure}</BaggageAirport>
                    <BaggageClass>{classes.slice(0,-6)} Flex</BaggageClass>
                </BaggageBoxHead>
                <BaggageBoxContent>
                    <PassengerBaggage>
                        <PassengerName>{fullName}</PassengerName>
                        <BaggageAllowance>Complimentary baggage allowance: <b>2 x 23kg</b></BaggageAllowance>
                    </PassengerBaggage>
                    <AdditionalBaggage>
                        <AddBaggageLabel>Additional baggage</AddBaggageLabel>
                        <AddBaggageSelect>
                            <option value=" No extra baggage" onChange={()=>{}}>No extra baggage</option>
                            <option value=" 1 additional bag" onChange={()=>{}}>1 additional bag</option>
                            <option value=" 2 additional bags" onChange={()=>{}}>2 additional bags</option>
                            <option value=" 3 additional bags" onChange={()=>{}}>3 additional bags</option>
                            <option value=" 4 additional bags" onChange={()=>{}}>4 additional bags</option>
                            <option value=" 5 additional bags" onChange={()=>{}}>5 additional bags</option>
                        </AddBaggageSelect>
                    </AdditionalBaggage>
                </BaggageBoxContent>
            </BaggageBox>
        </BaggageDetails>
        {/* <TotalForBaggage>
            <ExcessBaggage>Total for excess baggage</ExcessBaggage>
            <INR>INR 0</INR>
        </TotalForBaggage> */}
    </div>
  )
}

export default Options

// styled components 

const Benefits=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const BenefitsHead=styled.h4`
    color: #333;
    font: 700 31px Emirates-Medium;
    letter-spacing: .02em;
    padding: 0;
    margin: 0;
`;

const BenefitsP=styled.p`
    margin: 9px 0 0;
    font-family: Helvetica;
    letter-spacing: -.02em;
`;

const BenefitsCards=styled.div`
    margin: 16px 0px;
    width: 100%;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const BenefitsCard=styled.div`
    width: 19%;
    height: 131px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    color: #333;
    box-shadow: 0 2px 4px 2px rgba(0,0,0,.1);
    border-radius: 3px;
`;

const BenefitsImgCont=styled.div`
    display: block;
    height: 40px;
    margin: 7px auto 22px;
    width: 50px;
    padding-bottom: 50px;
    border-bottom: 3px solid #c60c30;

`;

const BenefitsImg=styled.img`
    display: block;
    height: 35px;
    margin: 7px auto 22px;
    width: 35px;
`;

const CardTitle=styled.p`
    color: #333;
    font-size: 15px;
    font-family: Helvetica;

`;

const BaggageWeight=styled.h6`
font-weight: bold;
color: #333;
font-size: 14px;
    font-family: Helvetica;
`;

// const UpgradeFlight=styled.div`

// `;

// const UpgradeHead=styled.h4`

// `;

// const UpgradeTitle=styled.h6`

// `;

// const UpgradeCards=styled.div`

// `;

// const UpgradeCard=styled.div`

// `;

// const UpgradeImgCont=styled.div`
//     width: 322px;
//     height: 286px;

// `;

// const UpgradeImg=styled.img`
//     width: 100%;
//     height: 100%;
// `;

// const UpgradeImgTitle=styled.h6`

// `;

const Recommended=styled.div`
    background-color: #f6f6f6;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 25px;
`;

const RecommendedHead=styled.h4`
    color: #333;
    font: 700 31px Emirates-Medium;
    letter-spacing: .02em;
    padding: 0;
    margin: 0;
`;

const RecommendedTitle=styled.p`
    font-size:15px;
    font-family: Helvetica;
`;

const RecommendedCards=styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    `;

const RecommendedCard=styled.div`
margin: 10px 0px;
    display: flex;
    background: #fff;
    box-shadow: 0 2px 4px 2px rgba(0,0,0,.1);
    border-radius: 3px;
    padding-top: 10px;
    height: max-content;
`;

const RecommCardLeft=styled.div`
    width:35%;
    align-items: center;
    justify-content: center;
    display: flex;
    height: max-content;
    `;

const RecommCardImg=styled.img`
    width: 400px;
    height: 270px;
    overflow: hidden;
    border-radius: 3px 0 0 3px;

`;

const RecommCardRight=styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 0px 25px;
    width: 65%;
`;

const RecommCardTitle=styled.h6`
    color: #333;
    font: 700 25px Helvetica;
    letter-spacing: 0;
    margin: 0 0 21px 0;
    padding: 0
`;

const RecommContentOne=styled.p`
    margin: 0;
    color: #333;
    font: 300 15px Helvetica;
    line-height: 2;
    `;

const RecommContent=styled.p`
    margin: 0;
    color: #333;
    font: 300 15px Helvetica;
    line-height: 1.5;

        &::before{
        background: url(	https://fly4.ekstatic.net/Images/success@2x.png) no-repeat 0 2px;
        background-size: 100% auto;
        display: inline-block;
        content: '';
        height: 17px;
        margin-right: 9px;
        vertical-align: top;
        width: 15px;
    }
`;

const RecommCardButton=styled.button`
    background: #fff;
    color: #333;
    border: solid 1px #333;
    height: 40px;
    padding: 10px 20px;
    float: right;
    width: max-content;
    margin: 20px 0px 10px 444px;
`;

const BaggageDetails=styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
`;

const BaggageBox=styled.div`
    border: solid 1px #c7c7c7;
    background-color: #fff;
    box-shadow: 0 2px 4px 2px rgba(0,0,0,.1);
    border-radius: 3px
`;

const BaggageBoxHead=styled.div`
background-color: #f6f6f6;
    border-radius: 3px 3px 0 0;
    display: flex;
    align-items: center;
    padding: 20px;
`;

const BaggageAirport=styled.h4`
    color: #333;
    font: 700 21px Helvetica;
    display: block;
`;

const BaggageClass=styled.h6`
    color: #438536;
    font: 400 14px/16px Helvetica;
    margin: 0px 10px;
    padding: 0;
`;

const BaggageBoxContent=styled.div`
    padding: 20px 30px;
    display: flex;
    justify-content: space-between;
    `;
    
    const PassengerBaggage=styled.div`
    display: flex;
    flex-direction: column;
`;

const PassengerName=styled.h6`
    color: #333;
    font: 700 16px Helvetica;
    line-height: 1.5;
`;

const BaggageAllowance=styled.p`
    color: #333;
    font: 300 15px Helvetica;
    line-height: 1.5;
`;

const AdditionalBaggage=styled.div`
    padding-left: 10px;
    width: 312px;
    position: relative;
    border: 1px solid #666;
    border-radius: 5px;

    &:hover{
        box-shadow: 0 0 6px 0 rgba(0,0,0,.5), inset 0 0 4px #a9a9a9;
    }
`;

const AddBaggageLabel=styled.p`
    position: absolute;
    left: 29px;
    top: 19px;
    pointer-events: none;
    font-size: 12px;
    color: #333;
    font-family: Helvetica;
    font-weight: 300;
    transform: translateX(0px) translateY(-10px);
    transition: 0.5s;
`;

const AddBaggageSelect=styled.select`
    height: 50px;
    padding: 19px 40px 0 20px;
    color: #333;
    font: 400 16px/16px arial,sans-serif;
    font-size: 20px;
    font-weight: 600;
    outline:none;
    border:none;
`;

const TotalForBaggage=styled.div`
    padding: 10px 40px;
    border-radius: 0 0 3px 3px;
    border-width: 1px 0 0;
    border: solid 1px #d8d8d8;
    background-color: #f6f6f6;
    margin-bottom: 20px; 
    display: flex;
    justify-content: space-between;
`;

const ExcessBaggage=styled.p`
font-weight: 700;
font-family: Helvetica;
color: #333;
line-height: 1.5;
font-size: 20px;
`;

const INR=styled.p`
font-weight: 700;
font-size: 20px;
    font-family: Helvetica;
    color: #333;
    line-height: 1.5;
`;
