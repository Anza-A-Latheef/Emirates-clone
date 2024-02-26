import React from 'react'
import styled from 'styled-components'

const Passengers = () => {
  return (
    <PassengerPage>
        <ImpInfo>
            <ImpInfoHead>
                <Important>Important information</Important>
            </ImpInfoHead>
            <ImpInfoContent>
                <ImpInfoPara><ImpInfoParaSpan>1. If you're travelling from India on flydubai:</ImpInfoParaSpan> An <ImpInfoParaSpan>Ok to board approval</ImpInfoParaSpan> from flydubai is mandatory for citizens of India travelling from Delhi. Please check the <u>flydubai website</u> for more information.</ImpInfoPara>
            </ImpInfoContent>
        </ImpInfo>
        <PassengerData>
            <PassengerDataHead>Passenger 1 (Adult)</PassengerDataHead>
            <PassengerDataP>Make sure the names you enter exactly match your passport, and please use English characters only. Names can't be changed once you have completed your booking.</PassengerDataP>
            <PassengerDataInputArea>
                <TitleSelectItem>
                    <TitleLabel>Title</TitleLabel>
                    <TitleSelect type="select" value="" onChange="" className="">
                        <TitleOption value="">Mr</TitleOption>
                        <TitleOption>Mrs</TitleOption>
                        <TitleOption>Miss</TitleOption>
                        <TitleOption>ms</TitleOption>
                        <TitleOption>Undisclosed</TitleOption>
                    </TitleSelect>
                </TitleSelectItem>
                <NameInputItem>
                    <FirstName placeholder='First Name'/>
                    <LastName placeholder='Last Name'/>
                </NameInputItem>
                <DobInput>
                    <TitleLabel>Day</TitleLabel>
                        <TitleSelect type="select" value="" onChange="" className="">
                            <TitleOption value="">1</TitleOption>
                            <TitleOption>2</TitleOption>
                            <TitleOption>3</TitleOption>
                            <TitleOption>4</TitleOption>
                            <TitleOption>5</TitleOption>
                            <TitleOption>6</TitleOption>
                            <TitleOption>7</TitleOption>
                            <TitleOption>8</TitleOption>
                            <TitleOption>9</TitleOption>
                            <TitleOption>10</TitleOption>
                        </TitleSelect>
                    <TitleLabel>Month</TitleLabel>
                        <TitleSelect type="select" value="" onChange="" className="">
                            <TitleOption value="">January</TitleOption>
                            <TitleOption>February</TitleOption>
                            <TitleOption>March</TitleOption>
                            <TitleOption>April</TitleOption>
                            <TitleOption>May</TitleOption>
                            <TitleOption>June</TitleOption>
                            <TitleOption>July</TitleOption>
                        </TitleSelect>
                    <TitleLabel>Title</TitleLabel>
                        <TitleSelect type="select" value="" onChange="" className="">
                            <TitleOption value="">Mr</TitleOption>
                            <TitleOption>Mrs</TitleOption>
                            <TitleOption>Miss</TitleOption>
                            <TitleOption>ms</TitleOption>
                            <TitleOption>Undisclosed</TitleOption>
                        </TitleSelect>
                </DobInput>
            </PassengerDataInputArea>        
            <FlyerBenefits>
                <FlyerBenefitsHead>Your Frequent Flyer benefits</FlyerBenefitsHead>
                <FlyerBenefitsP>Add your Emirates Skywards number to avail <FlyerBenefitSpan>exclusive Skywards benefits.</FlyerBenefitSpan> You can also add a partner airline membership number to earn Miles for this flight.</FlyerBenefitsP>
                <FlyerBenefitsInput>
                    <TitleSelectItem>
                        <TitleLabel>Airline/Programme</TitleLabel>
                        <TitleSelect type="select" value="" onChange="" className="">
                            <TitleOption value="">None</TitleOption>
                            <TitleOption>Emirates & flydubai / Skywards</TitleOption>
                            <TitleOption>Qantas / Frequent Flyer</TitleOption>
                        </TitleSelect>
                        <FlyerNumber placehholder="Frequent flyer number"/>
                    </TitleSelectItem>
                </FlyerBenefitsInput>
            </FlyerBenefits>
        </PassengerData>
    </PassengerPage>
  )
}

export default Passengers

const PassengerPage=styled.div`
    display: block;
`;

const ImpInfo=styled.div`
    color: #333;
    margin: 47px 0 0;
    padding: 21px 30px 12px;
    border-radius: 3px;
    border: solid 1px #d8d8d8;
    background-color: #fff;
`;

const ImpInfoHead=styled.div`
    border-radius: 3px;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
    border: solid 1px #d8d8d8;
    background-color: #fff;
    padding: 16px 33px 13px;
    margin: -19px -30px -2px;
    border-top: none;
    border-left: none;
    border-right: none;
`;

const Important=styled.h3`
    font-family:Helvetica;
    font-weight: 600;
    font-size: 16px;
    color: #333;
`;

const WarningIcon=styled.em`
    width: 15px;
    height: 15px;
    background-repeat: no-repeat;
    background-size: 15px 15px;
    background-image: url(../Images/tierbenefit/ic-info.png);
`;

const ImpInfoContent=styled.div`
   padding-top: 20px !important;
   border-top: 1px solid #fcfcfc;
`;

const ImpInfoPara=styled.p`
    padding-bottom: 10px;
    font-family:Helvetica;
    font-size: 13px;
`;

const ImpInfoParaSpan=styled.strong`
`;

const PassengerData=styled.div`
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.1), 0 2px 4px 0 rgba(0,0,0,.1);
    border-radius: 3px;
    padding-bottom: 20px;
    background-color: #fff;
    color: #333;
`;

const PassengerDataHead=styled.h4`
    font-size: 18px;
    font-weight: bold;
    color: #333;
    font-family:Helvetica;
    padding: 30px 30px 10px 30px;
    border-top: none;
    cursor: pointer;
`;

const PassengerDataP=styled.p`
    color: #333;
    font-size: 14px;
    padding: 5px 30px;
    font-family:Helvetica;

`;

const PassengerDataInputArea=styled.div`
    display: block;
`;

const TitleSelectItem=styled.div`
    position: relative;
`;

const TitleLabel=styled.p`
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

const TitleSelect=styled.select`
    height: 60px;
    width: 245px;
    border: solid #666 1px;
    border-radius: 4px;
    padding: 19px 40px 0 20px;
    color: #333;
    font: 400 16px/16px arial,sans-serif;
    box-shadow: inset 4px 4px 0 0 #f2f2f2;
    transition: height ease .3s;
    box-sizing: border-box;
    font-size: 20px;
    font-weight: 600;
    margin: 0 0 0 20px;
    &:hover{
        box-shadow: 0 0 6px 0 rgba(0,0,0,.5), inset 0 0 4px #a9a9a9;
    }
`;

const TitleOption=styled.option`

`;

const NameInputItem=styled.div`
    display: flex;
    align-items: center;
`;

const FirstName=styled.input`
    height: 60px;
    width: 50%;
    border: solid #666 1px;
    border-radius: 4px;
    padding: 19px 40px 0 20px;
    color: #333;
    font: 400 16px/16px arial,sans-serif;
    box-shadow: inset 4px 4px 0 0 #f2f2f2;
    transition: height ease .3s;
    box-sizing: border-box;
    font-size: 20px;
    font-weight: 600;
    margin: 0 0 0 20px;
    outline: none;
    &:hover{
        box-shadow: 0 0 6px 0 rgba(0,0,0,.5), inset 0 0 4px #a9a9a9;
    }
    &::placeholder{
        color: #333;
        font-weight: lighter;
        font-size: 17px;
    }
`;

const LastName=styled.input`
    height: 60px;
    width: 50%;
    outline: none;
    border: solid #666 1px;
    border-radius: 4px;
    padding: 19px 40px 0 20px;
    color: #333;
    font: 400 16px/16px arial,sans-serif;
    box-shadow: inset 4px 4px 0 0 #f2f2f2;
    transition: height ease .3s;
    box-sizing: border-box;
    font-size: 20px;
    font-weight: 600;
    margin: 0 0 0 20px;
    &:hover{
        box-shadow: 0 0 6px 0 rgba(0,0,0,.5), inset 0 0 4px #a9a9a9;
    }
    &::placeholder{
        color: #333;
        font-weight: lighter;
        font-size: 16px;
    }
`;

const DobInput=styled.div`
    border: 1px solid #333;
`;

const FlyerBenefits=styled.div`
    font-weight: bold;
`;

const FlyerBenefitsHead=styled.h4`

`;

const FlyerBenefitsP=styled.p`

`;

const FlyerBenefitSpan=styled.span`
color: #d71921;
`;

const FlyerBenefitsInput=styled.div`
    display: flex;
`;

const FlyerNumber=styled.input`

`;

