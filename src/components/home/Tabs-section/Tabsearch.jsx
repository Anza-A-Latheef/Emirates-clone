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
                <DepartureInput type="select" placeholder=" Depature Airport" />
                <ArrivalInput type="select" placeholder=" Arrival Airport" />
                <DateSelect>
                    {/* <label>Departing</label> */}
                    <DateInput type="date" placeholder=" Departing" />
                    <DateInput type="date" placeholder=" Returning" />
                </DateSelect>
            </AirportForm>
            <AirportForm>
                <PassengerInput type="select" placeholder="Passengers" />
                <StyledInfo />
                <ClassInput type="select" placeholder="Class" />
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

const DepartureInput=styled.input`
    padding: 18px 15px;
    outline: none;
    width: 39%;
    border: 1px solid #666;
    border-radius: 5px;

    &::placeholder{
        font-size: 16px;
        color: #333;
    }

    &:hover{
        box-shadow: 0 0 6px 0 rgba(0,0,0,.5), inset 0 0 4px #a9a9a9;
    }
`;

const StyledInfo =styled(IoIosInformationCircleOutline)`
    font-size: 23px;
    font-weight: bolder;
`;


const ArrivalInput=styled.input`
padding: 18px 15px;
outline: none;
border: 1px solid #666;
width: 39%;
border-radius: 5px;

&::placeholder{
    font-size: 16px;
    color: #333;
}

&:hover{
    box-shadow: 0 0 6px 0 rgba(0,0,0,.5), inset 0 0 4px #a9a9a9;
}
`;

const PassengerInput=styled.input`
    padding: 18px 15px;
    outline: none;
    width: 29%;
    border: 1px solid #666;
    border-radius: 5px;

    &::placeholder{
        font-size: 16px;
        color: #333;
    }

    &:hover{
        box-shadow: 0 0 6px 0 rgba(0,0,0,.5), inset 0 0 4px #a9a9a9;
    }
`;
const ClassInput=styled.input`
    padding: 18px 15px;
    outline: none;
    width: 30%;
    border: 1px solid #666;
    border-radius: 5px;

    &::placeholder{
        font-size: 16px;
        color: #333;
    }

    &:hover{
        box-shadow: 0 0 6px 0 rgba(0,0,0,.5), inset 0 0 4px #a9a9a9;
    }
`;

const DateSelect=styled.div`
    display: flex;
    border: 1px solid #333;
    border-radius: 5px;
    padding: 14px 15px;
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

    &::placeholder{
        font-size: 16px;
        color: #333;
    }
`;

const AirportSubmit=styled.button`
    width: 380px;
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