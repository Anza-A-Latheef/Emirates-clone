import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link as ScrollLink } from 'react-scroll';
import { IoIosInformationCircleOutline } from "react-icons/io";
import airportData from "../../../../airport.json"

export default function Tabsearch() {
    
    const [selectedOption, setSelectedOption] = useState('flight');
    const [departure, setDeparture] = useState('');
    const [arrival, setArrival] = useState('');
    const [passenger, setPassenger] = useState('');
    const [classes, setClasses] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [adults,setAdults]=useState(1);
    const [children,setChildren]=useState(0);
    const [infants,setInfants]=useState(0);
    const [totalPassenger,setTotalPassenger]=useState(1);
    const [popup,SetPopup] =useState(false);
    const navigate = useNavigate();

    const handleAirportSubmit = () => {
        navigate.push('/booking');
    }

    const handleIncrement = (type) =>{
        switch(type){
            case 'adults':
                if(adults+children<9) setAdults(adults+1);
                break;
            case 'children':
                if(adults+children<9) setChildren(children+1);
                break;
            case 'infants':
                if(infants<adults) setInfants(infants+1);
                
                break;
            default:
                break;
        }
    }

    const handleDecrement =(type)=>{
        switch(type){
            case 'adults':
                if(adults>1) setAdults(adults-1);
                break;
            case 'children':
                if(children>0) setChildren(children-1);
                break;
            case 'infants':
                if(infants>0) setInfants(infants-1);
                break;
            default:
                break;
        }
    }

    const handleRadioChange = (option) => {
        setSelectedOption(option === 'flight' ? 'flight' : 'flight+hotel');
    };

  const handleInputChange = (value, setState) => {
    setState(value);

    if (value) {
      event.target.classList.add('hasValue');
    } else {
      event.target.classList.remove('hasValue');
    }
  };

  const handleDepartureChange = (event) => {
    handleInputChange(event.target.value, setDeparture);
  };

  const handleArrivalChange = (event) => {
    handleInputChange(event.target.value, setArrival);
  };

  const handlePassengerChange = (event) => {
    handleInputChange(event.target.value, setPassenger);
  };

  const handleClassesChange = (event) => {
    handleInputChange(event.target.value, setClasses);
  };

  const handleDepartureDateChange = (event) => {
    handleInputChange(event.target.value, setDepartureDate);
  };

  const handleReturnDateChange = (event) => {
    handleInputChange(event.target.value, setReturnDate);
  };

  useEffect(() => {
    console.log(airportData);
    setTotalPassenger(adults+children+infants)
    if(infants>adults) setInfants(adults)
    }, [adults,children,infants]);

return (
    <TabsearchContainer>
        <TabsearchTop>
            <TabsearchSelect>
                <SelectFieldset>
                    <SelectContainer role="tablist">
                        <RadioButton className={selectedOption === 'flight' ? 'switchButton--checkmark' : ''} onClick={() => handleRadioChange('flight')}>
                            <SearchInput type="radio" className='radio-buttonInput' id="flight"  name="ToggleRadio" aria-checked={selectedOption === 'flight'} role="tab" aria-controls='search-flight' checked={selectedOption === 'flight'}/>
                            <SearchLabel  className='radioButton-label' htmlFor="flight">Flight</SearchLabel>
                        </RadioButton>
                        <RadioButton className={selectedOption === 'flight+hotel' ? 'switchButton--checkmark' : ''} onClick={() => handleRadioChange('flight+hotel')}>
                            <SearchInput type="radio" className='radio-buttonInput' id="flight+hotel"  name="ToggleRadio" aria-checked={selectedOption === 'flight+hotel'} role="tab" aria-controls='search-flight+hotel'  checked={selectedOption === 'flight+hotel'}/>
                            <SearchLabel  className='radioButton-label' htmlFor="flight+hotel" >Flight + Hotel</SearchLabel>
                        </RadioButton>
                    </SelectContainer> 
                </SelectFieldset>
            </TabsearchSelect>
            <AdvancedSearch to="">Advanced search: multi-city, promo codes, partner airlines <MdKeyboardArrowRight /></AdvancedSearch>
        </TabsearchTop>
        <TabsearchBottom>
            <AirportForm>
                <DepartureInputItem>
                    <DepartureLabel>Departure Airport</DepartureLabel>
                    <DepartureInput name='from' id='from' value={departure} onChange={handleDepartureChange} className={departure ? 'hasValue' : ''}>
                    <DepartureOption value="">Barcelona (BCN)</DepartureOption>
                    {airportData.map((Element)=>(
                <DepartureOption>
                    {Element.name}  ({Element.code})
                </DepartureOption>
                    ))}
                    </DepartureInput>
                </DepartureInputItem>
                <DepartureInputItem>
                    <DepartureLabel>Arrival Airport</DepartureLabel>
                    <ArrivalInput type="select" value={arrival} onChange={handleArrivalChange} className={arrival ? 'hasValue' : ''} >
                    <DepartureOption value="">Mumbai (BOM)</DepartureOption>
                    {airportData.map((Element)=>(
                <DepartureOption>
                    {Element.name}  ({Element.code})
                </DepartureOption>
                    ))}
                    </ArrivalInput>
                </DepartureInputItem>
                <DateInputItem>
                    <DateSelect>
                        <DateInput type="date" value={departureDate} onChange={handleDepartureDateChange} className={departureDate ? 'hasValue' : ''}/>
                        <DepartureLabel> Departing</DepartureLabel>
                    </DateSelect>
                    <DateSelect>
                        <DateInput type="date" value={returnDate} onChange={handleReturnDateChange} className={returnDate ? 'hasValue' : ''}/>
                        <DepartureLabel>Returning</DepartureLabel>
                    </DateSelect>
                </DateInputItem>
            </AirportForm>
            <AirportForm>
                <DepartureInputItem>
                    <PassengerInput onClick={()=>SetPopup(popup?false:true)} onChange={handlePassengerChange} className={passenger ? 'hasValue' : ''}>
                        <DepartureLabel>Passengers</DepartureLabel>
                        <PassengerNumber>{totalPassenger} Passengers</PassengerNumber>
                    </PassengerInput>
                   {popup && 
                   <PassengerSelect>
                        <PopoverArrow></PopoverArrow>
                        <PassengerHead>Passengers</PassengerHead>
                        <PassengerCounter>
                            <PassengerAge>
                                <CounterButton onClick={(e) => {
                                    handleDecrement('adults'); 
                                    e.preventDefault() ;} }>-</CounterButton>
                                <AgeDetails> 
                                    <NumberSect>{adults} Adults</NumberSect>
                                    <AgeLimit>Ages 12+</AgeLimit>
                                </AgeDetails>
                                <CounterButton onClick={(e) => {
                                    handleIncrement('adults');
                                    e.preventDefault();}}>+</CounterButton>
                            </PassengerAge>
                            <PassengerAge>
                                <CounterButton onClick={(e) => {
                                    handleDecrement('children');
                                    e.preventDefault();}}>-</CounterButton>
                                <AgeDetails> 
                                    <NumberSect>{children} Children</NumberSect>
                                    <AgeLimit>Ages 2-11</AgeLimit>
                                </AgeDetails>
                                <CounterButton onClick={(e) => {
                                    handleIncrement('children');
                                    e.preventDefault();}}>+</CounterButton>
                            </PassengerAge>
                            <PassengerAge>
                                <CounterButton onClick={(e) => {
                                    handleDecrement('infants');
                                    e.preventDefault();}}>-</CounterButton>
                                <AgeDetails> 
                                    <NumberSect>{infants} Infants</NumberSect>
                                    <AgeLimit>Age under 2, on lap</AgeLimit>
                                </AgeDetails>
                                <CounterButton onClick={(e) => {
                                    handleIncrement('infants');
                                    e.preventDefault();}}>+</CounterButton>
                            </PassengerAge>
                        </PassengerCounter>
                        <PassengerNote><NoteSpan>Please note: </NoteSpan> You can book a maximum of 9 passengers per booking.</PassengerNote>
                    </PassengerSelect>}
                </DepartureInputItem>
                <StyledInfo />
                <DepartureInputItem>
                    <DepartureLabel>Class</DepartureLabel>
                    <ClassInput type="select" value={classes} onChange={handleClassesChange} className={classes ? 'hasValue' : ''}>
                        <DepartureOption value="">Economy Class</DepartureOption>
                        <DepartureOption>Premium Class</DepartureOption>
                        <DepartureOption>Business Class</DepartureOption>
                        <DepartureOption>First Class</DepartureOption>
                    </ClassInput>
                </DepartureInputItem>
                <AirportSubmit onClick={handleAirportSubmit}>Search flights</AirportSubmit>
            </AirportForm>
        </TabsearchBottom>
    </TabsearchContainer>
  )
}

//styling area

const TabsearchContainer=styled.div`
    padding: 17px 20px;
    width:100%;
    display: flex;
    flex-direction: column;
`;

const TabsearchTop=styled.div`
    display: block
`;  

const SelectFieldset=styled.div`
    display: block;
    border: 0;
    padding: 0;
`;
    
const SelectContainer=styled.div`
    display: flex;
    border: 1px solid #666;
    border-radius: 3px;
    width: fit-content;
`;
    
const RadioButton=styled.div`
    display:flex;
    cursor: pointer;
    padding: 0px 32px;  
    height: 30px;
    align-items: center;
    
    &:hover{
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        
    }
    
    &:first-child{
        border-right: 1px solid #666;
    }
    
    &.switchButton--checkmark{
        background-color: #f7f7f7;
        box-shadow: inset 3px 3px 0 2px #f0f0f0;
        color: black;
        font-weight: bold;
    }
`;
    
const SearchInput =styled.input`
    cursor: pointer;
    position: relative;
    width: 18px;
    height: 18px;
    appearance: none;
    
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 18px; 
        height: 18px; 
        background-color: transparent; 
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    &:checked {
        &:before {
            content: '\u2714'; 
            position: absolute;
            top: 50%;
            left: 0%;
            transform: translate(-50%, -50%);
            font-size: 15px;
            color: #c60c30; 
        }
    }
`;

const SearchLabel=styled.label`
    font-family: Helvetica;
    font-size: 14px;
`;
    
const AdvancedSearch=styled(ScrollLink)`
    font-family: helvetica;
    margin: 20px 0px;
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #d71921;
    float: right;
    text-decoration: underline;
    cursor: pointer;

    &:hover{
        text-decoration: none;
    }
`;
    
const TabsearchSelect=styled.div`

`;

const TabsearchBottom=styled.div`
    width: 100%;
`;

const AirportForm=styled.form`
    display: flex;
    margin-bottom: 25px;
    gap: 20px;
    align-items: center;
`;

const DepartureInputItem=styled.div`
    display: flex;
    position: relative;
    width: 39%;
`;

const DepartureLabel=styled.p`
    position: absolute;
    left: 17px;
    top: 23px;
    pointer-events: none;
    font-size: 12px;
    color: #333;
    font-family: Helvetica;
    font-weight: 300;
    transform: translateX(0px) translateY(-10px);
    transition: 0.5s;
`;

const DepartureInput=styled.select`
    padding: 30px 15px 10px 15px;
    outline: none;
    width: 100%;
    font-size: large;
    border: 1px solid #666;
    border-radius: 5px;
    &:hover{
        box-shadow: 0 0 6px 0 rgba(0,0,0,.5), inset 0 0 4px #a9a9a9;
    }
`;

const DepartureOption=styled.option`

`;

const StyledInfo = styled(IoIosInformationCircleOutline)`
    font-size: 30px;
    font-weight: bolder;
`;


const ArrivalInput=styled.select`
    padding: 30px 15px 10px 15px;
    outline: none;
    width: 100%;
    font-size: large;
    border: 1px solid #666;
    border-radius: 5px;

    &:hover{
        box-shadow: 0 0 6px 0 rgba(0,0,0,.5), inset 0 0 4px #a9a9a9;
    }
    &:focus ~p,
    &.hasValue ~ p {
        color: #333;
        font-family: Helvetica;
        transform: translateX(0px) translateY(-10px);
        font-size: 12px;
        transition: 0.5s;
    }
`;

const PassengerInput=styled.div`
    padding: 31px 15px 8px 16px;
    outline: none;
    width: 100%;
    font-size: large;
    border: 1px solid #666;
    border-radius: 5px;

    &::placeholder{
        font-size: 16px;
        color: #333;
    }

    &:hover{
        box-shadow: 0 0 6px 0 rgba(0,0,0,.5), inset 0 0 4px #a9a9a9;
    }
    &:focus ~p,
    &.hasValue ~ p{
        color: #333;
        font-family: Helvetica;
        transform: translateX(0px) translateY(-10px);
        font-size: 12px;
        transition: 0.5s;
    }
`;

const PassengerNumber =styled.p`
    color: #333;
    font-size: 20px;
`;

const PassengerSelect =styled.div`
    position:absolute;
    top:75px;
    border: black solid 1px;
    display: flex;
    padding: 20px;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    width: 300px;
    height: max-content;
`;

const PopoverArrow=styled.div`
    position: absolute;
    left: 50%;
    width: 13px;
    height: 13px;
    margin-left: -10px;
    background-color: #fff;
    border: 1px solid #666;
    border-right: none;
    border-bottom: none;
    transform: rotate(45deg);
    top: -7px;
`;

const PassengerHead =styled.h4`
    color: #333;
    font-size: 23px;
    width: 100%;
    text-align: center;
    padding-bottom: 5px;
`;
const PassengerCounter =styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom:solid 1px #ccc ;
    border-top:solid 1px #ccc ;
    width: 100%;
`;
const PassengerAge =styled.div`
    width: 90%;
    margin: 10px 0px;
    display:flex;
    align-items: center;
    justify-content: space-between;
`;
const CounterButton =styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 39px;
    height: 39px;
    font-size: 1.6rem;
    background-color: #fff;
    border: 1px solid #000;
    border-radius: 3px;
    box-shadow: 0 2px 1px 0 #efefef;
    cursor: pointer;
    margin: 0px 10px;
    font-weight: bolder;
    color: #333;
`;

const AgeDetails =styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const NumberSect =styled.p`
    color: #333;
    font-weight: bold;
    font-size: 14px;
    font-family:Helvetica;
`;
    
    const AgeLimit =styled.p`
    color: #333;
    font-weight: lighter;
    font-size: 11px;
    font-family:Helvetica;
`;

const PassengerNote =styled.p`
    text-align: left;
    width: 85% ;
    padding-top: 10px;
    color: #333;
    font-weight: lighter;
    font-size: 12px;
    font-family:Helvetica;
    line-height: 1rem;
`;

const NoteSpan =styled.span`
    font-weight: bold;
    font-size: 14px;
`;

const ClassInput=styled.select`
    padding: 30px 15px 10px 15px;
    outline: none;
    width: 100%;
    font-size: large;
    border: 1px solid #666;
    border-radius: 5px;

    &:focus ~p,
    &.hasValue ~ p{
        color: #333;
        font-family: Helvetica;
        transform: translateX(0px) translateY(-10px);
        font-size: 12px;
        transition: 0.5s;
    }

    &:hover{
        box-shadow: 0 0 6px 0 rgba(0,0,0,.5), inset 0 0 4px #a9a9a9;
    }
`;

const DateSelect=styled.div`
    display: flex;
    border: none;
    padding: 0px 12px;
    position: relative;
`;
    
const DateInputItem=styled.div`
    display: flex;
    border: 1px solid #666;
    border-radius: 5px;
    width: 380px;
    &:hover{
        box-shadow: 0 0 6px 0 rgba(0,0,0,.5), inset 0 0 4px #a9a9a9;
    }
`;


const DateInput=styled.input`
    border: none;
    outline: none;
    border-radius: 5px;
    font-size: 20px;
    width: 165px;
    padding: 28px 15px 10px 0px;

    &:focus ~p,
    &.hasValue ~ p {
        color: #333;
        font-family: Helvetica;
        transform: translateX(0px) translateY(-10px);
        font-size: 12px;
        transition: 0.5s;
    }

`;

const AirportSubmit=styled.button`
    width: 500px;
    background-color: #d71921;
    cursor: pointer;
    color: white;
    font-size: 16px;
    font-weight:bold;
    border: none;
    padding: 20px 25px;
    border-radius: 5px;

    &:hover{
        box-shadow: 0 0 6px 0 rgba(0,0,0,.5), inset 0 0 4px #a9a9a9;
    }
`;