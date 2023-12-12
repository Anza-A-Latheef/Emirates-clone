import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-scroll';
import { MdKeyboardArrowRight } from "react-icons/md";


export default function Tabsearch() {
  return (
    <TabsearchContainer>
        <TabsearchTop>
            <TabsearchSelect>
                <SelectFieldset>
                    <SelectContainer role="tablist">
                        <RadioButton className='SwitchButton switchButton--checkmark'>
                            <SearchInput type="radio" className='radio-buttonInput' id="flight"  name="ToggleRadio" aria-checked="true" role="tab" aria-controls='search-flight' checked="checked"/>
                            <SearchLabel for="route" className='radioButton-label' >Flight</SearchLabel>
                        </RadioButton>
                        <RadioButton>
                            <SearchInput type="radio" className='radio-buttonInput' id="flight+hotel"  name="ToggleRadio" aria-checked="false" role="tab" aria-controls='search-flight+hotel' />
                            <SearchLabel for="flight+hotel" className='radioButton-label' >Flight + Hotel</SearchLabel>
                        </RadioButton>
                    </SelectContainer> 
                </SelectFieldset>
            </TabsearchSelect>
            <AdvancedSearch>Advanced search: multi-city, promo codes, partner airlines <MdKeyboardArrowRight /></AdvancedSearch>
        </TabsearchTop>
        <TabsearchBottom>
            <AirportForm>
                <DepartureInput type="select" placeholder=" Depature Airport" />
                <ArrivalInput type="select" placeholder=" Arrival Airport" />
                <AirportSubmit>Continue</AirportSubmit>
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

const TabsearchSelect=styled.div`

`;

const SelectFieldset=styled.fieldset`
    display: block;
    border: 0;
    padding: 0;
`;

const SelectContainer=styled.div`
    display: flex;
    border: 1px solid #666;
    /* padding: 10px; */
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
        box-shadow: inset 0.4rem 0.4rem 0 0 #f6f6f6;
        border-right: 1px solid #666;
        background-color: #f7f7f7;;
    }
    `;

const SearchInput =styled.input`
    cursor: pointer;
    opacity: 0;

`;

const SearchLabel=styled.label`
    font-family: Helvetica;
    font-size: 14px;
`;


const AdvancedSearch=styled(Link)`
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

const TabsearchBottom=styled.div`
    width: 100%;
`;

const AirportForm=styled.form`
    display: flex;
    gap: 20px;
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

const AirportSubmit=styled.button`
    width: 18%;
    background-color: #d71921;
    cursor: pointer;
    color: white;
    font-size: 15px;
    font-weight:bold;
    border: none;
    padding: 20px 25px;
    border-radius: 5px;
    &:hover{
        box-shadow: 0 0 6px 0 rgba(0,0,0,.5), inset 0 0 4px #a9a9a9;
    }
`;