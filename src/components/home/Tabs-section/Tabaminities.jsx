import React from 'react';
import styled from 'styled-components';


export default function Tabaminities() {
  return (
    <AminitiesContainer>
        <AminitiesTop>
            <AminitiesForm>
                <AminitiesInput  checked type="radio" id="route"  name="RadioName"/>
                <AminitiesLabel for="route">Route</AminitiesLabel>
                <AminitiesInput type="radio" id="flight number" name="RadioName"/>
                <AminitiesLabel for="flight number">Flight number</AminitiesLabel>
            </AminitiesForm>
        </AminitiesTop>
        <AminitiesBottom>

        </AminitiesBottom>
    </AminitiesContainer>
  )
}


//styling area 

const AminitiesContainer=styled.div`
    padding: 15px 20px;
    width:100%;
    display: flex;
    flex-direction: column;
`;
const AminitiesTop=styled.div``;
const AminitiesForm=styled.form``;
const AminitiesInput=styled.input``;
const AminitiesLabel=styled.label``;
const AminitiesBottom=styled.div``;