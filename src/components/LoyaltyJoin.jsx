import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import LoyaltyOptions from './Nav-dropdown/loyalty/LoyaltyOptions'
import FeedBackPopup from './FeedBackPopup'
import Footer from './footer/Footer'

const LoyaltyJoin = () => {
  return (
    <LoyaltyContainer>
        <Navbar/>
        <LoyaltyOptions/>
        <LoyalContainer>
            <LoyalTop>
                <LoyalTitle>loyalty </LoyalTitle>
               <LoyalHead>Join Emirates Skywards</LoyalHead>
               <LoyalDescription>Open up a world of rewards every time you travel. Enjoy reward flights, upgrades, exclusive benefits and more.</LoyalDescription>
            </LoyalTop>
            <LoyalBottom>
                <UserCard>
                    <UserDetailsForm>
                        <NameDetails>
                            <TitleInput type="text" placeholder="Title" />
                            <NameInput type="text" placeholder="First name" />
                            <NameInput type="text" placeholder="Last name" />
                        </NameDetails>
                        <Note>Your name must be entered in English as it appears on your passport.</Note>
                        <Credentials>
                            <CredentialInput type="text" placeholder="Email" />
                            <CredentialInput type="password" placeholder="Password" />
                        </Credentials>
                        <DatePlace>
                            <MonthSelect>
                                <MonthInput type="text" placeholder="Day" />
                                <MonthInput type="text" placeholder="Month" />
                                <MonthInput type="text" placeholder="Year" />
                            </MonthSelect>
                            <CountrySelect type="text" placeholder="Country/Territory of residence" />
                        </DatePlace>
                        <Communication>
                            <Language type="text" Placeholder="Preferred Language" />
                            <CountryCode type="text" Placeholder="Country code" />
                            <Phone type="telephone" Placeholder="Mobile number" />
                        </Communication>
                        <Invite type="text" placeholder="Enter invite code (optional)" />
                        <AlreadyMember>Already have an Emirates Skywards membership number?</AlreadyMember>
                        <RadioInput>
                            <RadioSelect type="radio" id="no" name="select" defaultChecked="true"/>
                            <Label>No</Label>
                            <RadioSelect type="radio" id="yes" name="select" />
                            <Label>Yes</Label>
                        </RadioInput>
                        <CheckClick>
                            <CheckInput type="checkbox" name="CheckPolicy" />
                            <CheckLabel>Sign up to receive Emirates newsletters and special offer emails. You can unsubscribe at any time via the link in our emails, by updating your Emirates Skywards account preferences or by contacting us. For more details on how we use your personal information, please see our <u>privacy policy.</u></CheckLabel>
                        </CheckClick>
                        <CheckClick>
                            <CheckInput type="checkbox" name="CheckPolicy" />
                            <CheckLabel>Sign up to receive flydubai   newsletters and special offer emails. Your name and email address will be shared with flydubai for this purpose. Unsubscribe at any time via relevant link in flydubai emails, by updating your Emirates Skywards account preferences or by contacting Emirates or flydubai. For more details, please see flydubai’s <u>privacy policy.</u></CheckLabel>
                        </CheckClick>
                        <PolicyNote>By creating an account you are agreeing to the <u>Emirates Skywards programme rules</u> and our <u>privacy policy.</u></PolicyNote>
                        <CreateButton type="submit">Create an account</CreateButton>
                    </UserDetailsForm>
                </UserCard>
            </LoyalBottom>
        </LoyalContainer>
        <Footer/>
        <FeedBackPopup/>
    </LoyaltyContainer>
  )
}

export default LoyaltyJoin

//styling area

const LoyaltyContainer=styled.section`
    display: block;
    background-repeat: no-repeat;
    background-size: contain;
    background-color: #f6f6f6;
    background-image: url(https://c.ekstatic.net/ecl/skywards/ghaf-tree-background-w1280x960.jpg?h=x9MVwDsK0CXcjZA1jGsHLA);
`;

const LoyalContainer=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-weight: bold;
    padding: 100px 125px 80px 125px;
`;

const LoyalTop=styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    padding-bottom: 30px;
    font-family:Helvetica;
    width: 50%;
    padding-bottom: 49px;
`;

const LoyalTitle=styled.h5`
    letter-spacing: 4px;
    text-transform: uppercase;
    font-size: 10px;
`;

const LoyalHead=styled.h2`
    font-family: 'Emirates-Medium';
    font-size: 47px;
    padding-bottom: 30px;
    font-weight:600 ;
    letter-spacing: 2px;
`;

const LoyalDescription=styled.h6`
    font-weight: bold;
    font-family: Helvetica;
    font-weight: lighter;
    font-size: 20px;

`;

const LoyalBottom=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const UserCard=styled.div`
    background-color: white;
    width: 66%;
    padding: 30px;
    border-radius: 3px;
    border: 1px solid #d8d8d8;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.11);
`;

const UserDetailsForm=styled.form`
    display: flex;
    flex-direction: column;
`;

const NameDetails=styled.div`
    display: flex;
`;

const TitleInput=styled.input`
    min-height: 60px;
    width: 120px;
    padding: 0px 15px;
    color: #333;
    border: 1px solid #666;
    border-radius: 3px;
    box-shadow: inset 4px 4px 0 0 #f2f2f2;
    outline: none;
    font-size:16px;

    &:hover{
        box-shadow: 0 0 6px 0 rgba(0,0,0,.5), inset 0 0 4px #a9a9a9;
    }

    &::placeholder{
        font-family: Helvetica;
        font-size: 15px;
    }
`;

const NameInput=styled.input`
    min-height: 60px;
    width: 260px;
    padding: 0px 15px;
    color: #333;
    border: 1px solid #666;
    border-radius: 3px;
    box-shadow: inset 4px 4px 0 0 #f2f2f2;
    margin-left: 20px;
    outline: none;
    font-size:16px;


    &:hover{
        box-shadow: 0 0 6px 0 rgba(0,0,0,.5), inset 0 0 4px #a9a9a9;
    }

    &::placeholder{
        font-family: Helvetica;
        font-size: 15px;
    }
`;

const Note=styled.p`
    font-weight: lighter;
    font-family: Helvetica;
    text-align: left;
    color: #333;
    font-size: 14px;
    margin: 20px 0px;
`;

const Credentials=styled.div`
    display: flex;
    justify-content: space-between;
`;

const CredentialInput=styled.input`
    min-height: 60px;
    width: 320px;
    padding: 0px 15px;
    color: #333;
    border: 1px solid #666;
    border-radius: 3px;
    box-shadow: inset 4px 4px 0 0 #f2f2f2;
    outline: none;
    font-size:16px;
    margin-top: 15px;

    &:hover{
        box-shadow: 0 0 6px 0 rgba(0,0,0,.5), inset 0 0 4px #a9a9a9;
    }

    &::placeholder{
        font-family: Helvetica;
        font-size: 15px;
    }
`;

const DatePlace=styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    
`;

const MonthSelect=styled.div`
    background-color: white;
    display: flex;
    min-height: 60px;
    width: 320px;
    padding: 0px 15px;
    color: #333;
    border: 1px solid #666;
    border-radius: 3px;
    box-shadow: inset 4px 4px 0 0 #f2f2f2;

    &:hover{
        box-shadow: 0 0 6px 0 rgba(0,0,0,.5), inset 0 0 4px #a9a9a9;
    }

    &::placeholder{
        font-family: Helvetica;
        font-size: 15px;
    }
`;

const MonthInput=styled.input`
    outline: none;
    border: none;
    display: flex;
    min-height: 60px;
    width: 100px;
    padding: 0px 15px;
    color: #333;
    border-radius: 3px;
    outline: none;
    font-size:16px;


    &::placeholder{
        font-family: Helvetica;
        font-size: 15px;
    }
`;

const CountrySelect=styled.input`
    min-height: 60px;
    width: 320px;
    padding: 0px 15px;
    color: #333;
    border: 1px solid #666;
    border-radius: 3px;
    box-shadow: inset 4px 4px 0 0 #f2f2f2;
    outline: none;
    font-size:16px;

    &:hover{
        box-shadow: 0 0 6px 0 rgba(0,0,0,.5), inset 0 0 4px #a9a9a9;
    }

    &::placeholder{
        font-family: Helvetica;
        font-size: 15px;
    }
`;

const Communication=styled.div`
    display: flex;
    margin-top: 30px;
    justify-content: space-between;
`;

const Language=styled.input`
    min-height: 60px;
    width: 250px;
    padding: 0px 15px;
    color: #333;
    border: 1px solid #666;
    border-radius: 3px;
    box-shadow: inset 4px 4px 0 0 #f2f2f2;
    outline: none;
    font-size:16px;

    &:hover{
        box-shadow: 0 0 6px 0 rgba(0,0,0,.5), inset 0 0 4px #a9a9a9;
    }

    &::placeholder{
        font-family: Helvetica;
        font-size: 15px;
    }
`;

const CountryCode=styled.input`
    min-height: 60px;
    width: 140px;
    padding: 0px 15px;
    color: #333;
    border: 1px solid #666;
    border-radius: 3px;
    box-shadow: inset 4px 4px 0 0 #f2f2f2;
    outline: none;
    font-size:16px;


    &:hover{
        box-shadow: 0 0 6px 0 rgba(0,0,0,.5), inset 0 0 4px #a9a9a9;
    }

    &::placeholder{
        font-family: Helvetica;
        font-size: 15px;
    }
`;

const Phone =styled.input`
    min-height: 60px;
    width: 235px;
    padding: 0px 15px;
    color: #333;
    border: 1px solid #666;
    border-radius: 3px;
    box-shadow: inset 4px 4px 0 0 #f2f2f2;
    outline: none;
    font-size:16px;


    &:hover{
        box-shadow: 0 0 6px 0 rgba(0,0,0,.5), inset 0 0 4px #a9a9a9;
    }

    &::placeholder{
        font-family: Helvetica;
        font-size: 15px;
    }
`;

const Invite=styled.input`
    min-height: 60px;
    width: 410px;
    padding: 0px 15px;
    color: #333;
    border: 1px solid #666;
    border-radius: 3px;
    box-shadow: inset 4px 4px 0 0 #f2f2f2;
    margin-top: 30px;
    outline: none;
    font-size:16px;

    &:hover{
        box-shadow: 0 0 6px 0 rgba(0,0,0,.5), inset 0 0 4px #a9a9a9;
    }

    &::placeholder{
        font-family: Helvetica;
        font-size: 15px;
    }
`;

const AlreadyMember=styled.p`
    font-weight: lighter;
    font-family: Helvetica;
    text-align: left;
    color: #333;
    font-size: 14px;
    margin: 20px 0px;
`;

const RadioInput=styled.div`
    display: flex;
    align-items: center;
`;

const RadioSelect=styled.input`
    padding: 10px;
    width: 20px;
    height: 20px;
    cursor: pointer;
    font-size: 10px;
    margin: 5px;
    accent-color: #d71921;
`;

const Label=styled.label`
    font-weight: lighter;
    font-family: Helvetica;
    text-align: left;
    color: #333;
    font-size: 14px;
`;

const CheckClick=styled.div`
    display: flex;
    margin-top: 20px;
`;

const CheckInput=styled.input`
    position: relative;
    width: 18px;
    height: 18px;
    appearance: none;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 20px; 
    height: 20px; 
    margin-right: 10px;
    border: 1px solid #333;
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
            top: 0;
            left: 0;
            font-size: 15px;
            color: #c60c30; 
    }
  }

`;

const CheckLabel=styled.label`
    font-weight: lighter;
    font-family: Helvetica;
    text-align: left;
    color: #333;
    font-size: 14px;
    margin: 0px 20px;
    line-height: 1.3;
`;

const PolicyNote=styled.p`
    font-weight: lighter;
    font-family: Helvetica;
    text-align: left;
    color: #333;
    font-size: 14px;
    margin: 20px 0px;
`;

const CreateButton=styled.button`
    color: #fff;
    background: #d71921;
    border: 0;
    height: 50px;
    font-weight: 800;
    font-family: Helvetica;
    width: fit-content;
    margin: 0 auto;
    padding: 15px 50px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
`;