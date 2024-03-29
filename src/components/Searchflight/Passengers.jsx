import React,{useState, useEffect ,useContext} from 'react'
import styled from 'styled-components';
import { FullNameContext , PassengerNamesContext} from './SearchPage';

const Passengers = ({ totalPassengers }) => {
    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const [fullNames,setFullNames]=useState('');
    const [title, setTitle] = useState('');
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [showContent, setShowContent] = useState(Array(totalPassengers).fill(false));
    const {setFullName} = useContext(FullNameContext)
    const {passengerNames,setPassengerNames} = useContext(PassengerNamesContext)

    const toggleContent = (index) => {
        const newShowContent = [...showContent];
        newShowContent[index] = !newShowContent[index];
        setShowContent(newShowContent);
    };


    const handleSaveButtonClick = ()=>{
        const fullName = `${firstName} ${lastName}`;
        setPassengerNames(prevFullNames => [...prevFullNames, fullName]);
        setFullName(fullName);
    }

     useEffect(()=>{
        console.log(passengerNames);
     })

    const generatePassengerInputs = () => {
        let inputs = [];
        for (let i = 1; i <= totalPassengers; i++) {
            inputs.push(
                <PassengerData key={i}>
                    <PassengerDataHead onClick={() => toggleContent(i)}>Passenger {i}</PassengerDataHead>
                    {showContent[i] && (
                        <>
                            <PassengerDataP>Make sure the names you enter exactly match your passport, and please use English characters only. Names can't be changed once you have completed your booking.</PassengerDataP>
                            <PassengerDataInputArea>
                                <TitleSelectItem>
                                    <TitleLabel>Title</TitleLabel>
                                    <TitleSelect onChange={(event)=>setTitle(event.target.value)} className="">
                                        <TitleOption >Select Title</TitleOption>
                                        <TitleOption >Mr</TitleOption>
                                        <TitleOption >Mrs</TitleOption>
                                        <TitleOption >Ms</TitleOption>
                                        <TitleOption >Undisclosed</TitleOption>
                                    </TitleSelect>
                                </TitleSelectItem>
                                <NameInputItem>
                                    <FirstName placeholder='First Name' onChange={(event)=>setFirstName(event.target.value)}/>
                                    <LastName placeholder='Last Name'   onChange={(event)=>setLastName(event.target.value)}/>
                                </NameInputItem>
                                <DobInput>
                                    <TitleSelectItem>
                                        <DayLabel>Day</DayLabel>
                                        <DaySelect onChange={(event)=> setDay(event.target.value)} className="">
                                            <TitleOption value="">2</TitleOption>
                                            {Array.from({ length: 31 }, (_, index) => (
                                            <TitleOption key={index + 1} value={index + 1}>{index + 1}</TitleOption>
                                            ))}
                                        </DaySelect>
                                    </TitleSelectItem>
                                    <TitleSelectItem>
                                        <MonthLabel>Month</MonthLabel>
                                        <MonthSelect onChange={(event)=>setMonth(event.target.value)} className="">
                                            <TitleOption value="">February</TitleOption>
                                            {Array.from({ length: 12 }, (_, index) => (
                                                <TitleOption key={index + 1} value={index + 1}> {new Date(0, index).toLocaleString('default', { month: 'long' })} </TitleOption>                   
                                            ))}               
                                        </MonthSelect>
                                    </TitleSelectItem>
                                    <TitleSelectItem>
                                        <YearLabel>Year</YearLabel>
                                        <YearSelect onChange={(event)=>setYear(event.target.value)} className="">
                                            <TitleOption value="">2000</TitleOption>
                                            {Array.from({ length: 150}, (_, index) => (
                                                <TitleOption key={index + 1875} value={index + 1875}> {index + 1875} </TitleOption>
                                            ))}
                                        </YearSelect>
                                    </TitleSelectItem>
                                </DobInput>
                            </PassengerDataInputArea>        
                            <FlyerBenefits>
                                <FlyerBenefitsHead>Your Frequent Flyer benefits</FlyerBenefitsHead>
                                <FlyerBenefitsP>Add your Emirates Skywards number to avail <FlyerBenefitSpan>exclusive Skywards benefits.</FlyerBenefitSpan> You can also add a partner airline membership number to earn Miles for this flight.</FlyerBenefitsP>
                                <FlyerBenefitsInput>
                                    <FlyerSelectItem>
                                        <FlyerLabel>Airline/Programme</FlyerLabel>
                                        <FlyerSelect type="select"  onChange={(event)=>setYear(event.target.value)} className="">
                                            <TitleOption value="">None</TitleOption>
                                            <TitleOption>Emirates & flydubai / Skywards</TitleOption>
                                            <TitleOption>Qantas / Frequent Flyer</TitleOption>
                                        </FlyerSelect>
                                    </FlyerSelectItem>
                                    <FlyerNumber placeholder="Frequent flyer number"/>
                                </FlyerBenefitsInput>
                            </FlyerBenefits>
                            <SaveButtonDiv>
                                <SaveButton onClick={handleSaveButtonClick}>Save</SaveButton>
                            </SaveButtonDiv>
                        </>
                    )}
                </PassengerData>
            );
        }
        return inputs;
    };
   
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
            {generatePassengerInputs()}
        
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
    margin: 30px 0px;
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
    top: 38px;
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
    margin: 20px 0 0 20px;
    &:hover{
        box-shadow: 0 0 6px 0 rgba(0,0,0,.5), inset 0 0 4px #a9a9a9;
    }
`;

const TitleOption=styled.option`
    font-size:15px;
    font-family:Helvetica;
    font-weight: bold;
`;

const NameInputItem=styled.div`
    display: flex;
    align-items: center;
    margin: 20px 0px;
`;

const FirstName=styled.input`
    height: 60px;
    width: 45%;
    border: solid #666 1px;
    border-radius: 4px;
    padding-left: 20px;
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
    width: 45%;
    outline: none;
    border: solid #666 1px;
    border-radius: 4px;
    padding-left: 20px;
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
    display: flex;
    height: 60px;
    width: 40%;
    outline: none;
    border: solid #666 1px;
    border-radius: 4px;
    color: #333;
    font: 400 16px/16px arial,sans-serif;
    box-shadow: inset 4px 4px 0 0 #f2f2f2;
    font-size: 20px;
    font-weight: 600;
    margin: 0 0 0 20px;
    margin-top: 20px;
`;

const DaySelect=styled.select`
    height: 50px;
    padding: 19px 40px 0 20px;
    color: #333;
    font: 400 16px/16px arial,sans-serif;
    font-size: 20px;
    font-weight: 600;
    outline:none;
    border:none;
`;

const DayLabel=styled.p`
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

const MonthSelect=styled.select`
     height: 50px;
    padding: 19px 40px 0 20px;
    color: #333;
    font: 400 16px/16px arial,sans-serif;
    font-size: 20px;
    font-weight: 600;
    outline:none;
    border:none;
`;

const MonthLabel=styled.p`
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

const YearSelect=styled.select`
    height: 50px;
    padding: 19px 35px 0 20px;
    color: #333;
    font: 400 16px/16px arial,sans-serif;
    font-size: 20px;
    font-weight: 600;
    outline:none;
    border:none;
`;


const YearLabel=styled.p`
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

const FlyerBenefits=styled.div`
    min-width: 800px;
    margin-top: 15px;
    padding: unset;
    background: none;
    border-radius: 3px;
    color: #333;
    border: none;
`;

const FlyerBenefitsHead=styled.h4`
    margin:  0 20px;
    font-family: Helvetica;
    font-size: 18px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    color: #333;
    position: relative;
    padding-bottom: 15px;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 60px;
        height: 2px;
        background-color: #c60c30;
    }
`;

const FlyerBenefitsP=styled.p`
    width: 1040px;
    font-family: Helvetica;
    margin:  15px 20px;
    font-size: 16px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #333;
`;

const FlyerBenefitSpan=styled.span`
    color: #c60c30;
    text-decoration: underline;

`;

const FlyerBenefitsInput=styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    margin: 0px 20px;
`;
const FlyerSelectItem=styled.div`
    position: relative;
    width: 45%;
    height: 60px;
`;
const FlyerLabel=styled.p`
   position: absolute;
    left: 14px;
    top: 19px;
    pointer-events: none;
    font-size: 12px;
    color: #333;
    font-family: Helvetica;
    font-weight: 300;
    transform: translateX(0px) translateY(-10px);
    transition: 0.5s;
`;


const FlyerSelect=styled.select`
    height: 60px;
    width: 100%;
    border: solid #666 1px;
    border-radius: 4px;
    padding: 19px 40px 0 20px;
    color: #333;
    font: 400 16px/16px arial,sans-serif;
    box-shadow: inset 4px 4px 0 0 #f2f2f2;
    font-size: 20px;
    font-weight: 600;
    &:hover{
        box-shadow: 0 0 6px 0 rgba(0,0,0,.5), inset 0 0 4px #a9a9a9;
    }
`;
const FlyerNumber=styled.input`
    height: 60px;
    width: 45%;
    border: solid #666 1px;
    border-radius: 4px;
    color: #333;
    padding-left: 20px;
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

const SaveButtonDiv=styled.div`
    display: flex;
    width: 94%;
    justify-content: end;
`;

const SaveButton=styled.button`
    margin-top: 24px;
    margin-left: 20px;
    font-family: Helvetica;
    font-size: 15px;
    font-weight: 700;
    background: #fff;
    color: #333;
    border: 1px solid #333;
    border-radius: 2px;
    text-align: center;
    padding: 10px 20px;

    &:hover{
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        cursor: pointer;
    }
`;