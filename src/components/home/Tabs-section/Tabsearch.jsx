import React, {useState} from 'react';
import styled from 'styled-components';
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link as ScrollLink } from 'react-scroll';
import { IoIosInformationCircleOutline } from "react-icons/io";

export default function Tabsearch() {
    const [selectedOption, setSelectedOption] = useState('flight');
    const handleRadioChange = (option) => {
    setSelectedOption(option);
  };

  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');
  const [passenger, setPassenger] = useState('');
  const [classes, setClasses] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

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
                    <DepartureInput type="select" value={departure} onChange={handleDepartureChange} className={departure ? 'hasValue' : ''} />
                    <DepartureLabel>Depature Airport</DepartureLabel>
                </DepartureInputItem>
                <DepartureInputItem>
                    <ArrivalInput type="select" value={arrival} onChange={handleArrivalChange} className={arrival ? 'hasValue' : ''} />
                    <DepartureLabel>Arrival Airport</DepartureLabel>
                </DepartureInputItem>
                <DateInputItem>
                    <DateSelect>
                        <DateInput type="select" value={departureDate} onChange={handleDepartureDateChange} className={departureDate ? 'hasValue' : ''}/>
                        <DepartureLabel> Departing</DepartureLabel>
                    </DateSelect>
                    <DateSelect>
                        <DateInput type="select" value={returnDate} onChange={handleReturnDateChange} className={returnDate ? 'hasValue' : ''}/>
                        <DepartureLabel>Returning</DepartureLabel>
                    </DateSelect>
                </DateInputItem>
            </AirportForm>
            <AirportForm>
                <DepartureInputItem>
                    <PassengerInput type="select" value={passenger} onChange={handlePassengerChange} className={passenger ? 'hasValue' : ''}/>
                    <DepartureLabel>Passengers</DepartureLabel>
                </DepartureInputItem>
                <StyledInfo />
                <DepartureInputItem>
                    <ClassInput type="select" value={classes} onChange={handleClassesChange} className={classes ? 'hasValue' : ''}/>
                    <DepartureLabel>Class</DepartureLabel>
                </DepartureInputItem>
                <AirportSubmit>Search flights</AirportSubmit>
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
    font-size: 16px;
    color: #333;
    font-family: Helvetica;
    font-weight: 300;
`;

const DepartureInput=styled.input`
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
    &.hasValue ~ p{
        color: #333;
        font-family: Helvetica;
        transform: translateX(0px) translateY(-10px);
        font-size: 12px;
        transition: 0.5s;
    }

`;

const StyledInfo = styled(IoIosInformationCircleOutline)`
    font-size: 30px;
    font-weight: bolder;
`;


const ArrivalInput=styled.input`
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

const PassengerInput=styled.input`

    padding: 30px 15px 10px 15px;
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
const ClassInput=styled.input`

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