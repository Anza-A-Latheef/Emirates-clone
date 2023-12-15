import React, {useState} from 'react'
import styled from 'styled-components'

const Logcontent = ({ onLogin }) => {

    const [userEmail, setUserEmail] = useState('');
    const [password, setPassword] = useState('');
    const [keepLoggedIn, setKeepLoggedIn] = useState(false);
    const handleLogin = (e) => {
        e.preventDefault();
        onLogin({ userEmail, password, keepLoggedIn });
    };
    

  return (
    <>
    <LogcontentContainer>
        <LogcontentLeft>
            <LeftTitle>Login</LeftTitle>
            <LoginForm onSubmit={handleLogin}>
                <LoginEmail type="email" name="logindetail" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} placeholder="Email or Emirates Skywards number"  />
                <ForgetDetails>Forgot your email or account number?</ForgetDetails>
                <LoginEmail type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="logindetail" placeholder="Password"  />
                <ForgetDetails>Forgot/Create password</ForgetDetails>
                <Checkbox>
                    <KeepLogin type="checkbox" checked={keepLoggedIn} defaultChecked={keepLoggedIn} onChange={(e) => setKeepLoggedIn(e.target.checked)}/>
                    <KeepLoginLabel>Keep me logged in on this device</KeepLoginLabel>
                </Checkbox>
                <LoginSubmit type="submit">Login</LoginSubmit>
            </LoginForm>
        </LogcontentLeft> 
        <IconImageContainer>
            <IconImage src="https://c.ekstatic.net/uiassets/acc/prd/_next/static/or.svg" alt="central icon"/>
        </IconImageContainer> 
        <LogcontentRight>
            <RightTitle>Not an Emirates Skywards member yet?</RightTitle>
            <RightSubtitle>Register now to make the most of every mile with <RightSpan>Emirates Skywards</RightSpan></RightSubtitle>
            <JoinButton type="button" >Join now</JoinButton>
        </LogcontentRight>   
    </LogcontentContainer>
    <FooterCapContainer>
        <FooterCap>
            <Head_a><FootercapHead>Emirates</FootercapHead></Head_a>
            <FootercapTitle>Login to Emirates</FootercapTitle>
        </FooterCap>
    </FooterCapContainer>
    </>
  )
}

export default Logcontent


//styling area

const LogcontentContainer=styled.div`
    padding: 30px 52px;
    border: 1px solid #d8d8d8;
    border-radius: 4px;
    box-shadow: 0 2px 4px 0 #00000019;
    background-color: #fff;
    margin: 0px 135px;
    display: flex;
    justify-content: space-around;
    margin-bottom: 250px;
`;

const LogcontentLeft=styled.div`
    width: 50%;
    min-height: 328px;
    text-align: left;
    display: flex;
    flex-direction: column;
    position: relative;
    border-right: 1px solid #d8d8d8;
    padding-right:100px;
`;

const LeftTitle=styled.h2`
    font-family: Helvetica;
    color: #333;
    font-size: 1.3rem;
    line-height: 1.4rem;
    margin: 0 0 19px;
`;

const LoginForm=styled.form`
    display: flex;
    flex-direction: column;
`;

const LoginEmail=styled.input`
    padding: 0 20px;
    color: #333;
    line-height: 60px;
    border: 1px solid #666;
    border-radius: 3px;
    box-shadow: inset 4px 4px 0 0 #f2f2f2;
    margin-top: 5px;
    outline: none;
    font-size:16px;

    &::placeholder{
        color: #666;
        font-size: 16px;
    }

    &:hover{
        box-shadow: 0 0 6px 0 grey;
    }
`;

const Checkbox=styled.div`
    display: flex;
    text-align: left;
    margin-bottom: 10px;
    white-space: nowrap;
`;
const ForgetDetails=styled.p`
    color: #c60c30;
    text-decoration: underline;
    font-family: Helvetica;
    font-size: 14px;
    text-align: right;
    margin: 10px 0px;
`;

const KeepLogin=styled.input`

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
    border: 1px solid #c60c30;
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
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 15px;
            color: #c60c30; 
    }
  }
`;

const KeepLoginLabel = styled.label`
  display: flex;
  align-items: center;
  padding-left: 10px;
  color: #333;
  font-family: 'Helvetica';
  font-size: 15px;
  white-space: pre-wrap;
  vertical-align: middle;
`;

const LoginSubmit=styled.button`
    height: 48px;
    color: #fff;
    background: #c60c30;
    font-size: 15px;
    font-weight: 700;
    font-family: HelveticaNeue,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;
    padding: 0 10px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    outline: none;

    &:hover{
        box-shadow: 0 0 6px 0 grey;
    }
`;

const IconImageContainer=styled.div`
    position: absolute;
    top:70%;
    left: 51.5%;
`;

const IconImage=styled.img`
    width: 48px;
    height: 48px;
    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxjaXJjbGUgaWQ9ImEiIGN4PSIyMyIgY3k9IjIzIiByPSIyMyIvPjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHRyYW5zZm9ybT0icm90YXRlKDkwIDIzIDI0KSI+PHVzZSBmaWxsPSIjRkZGIiB4bGluazpocmVmPSIjYSIvPjxjaXJjbGUgc3Ryb2tlPSIjQzdDN0M3IiBjeD0iMjMiIGN5PSIyMyIgcj0iMjMuNSIvPjwvZz48cGF0aCBkPSJNMzEuOTggMjguMDAxbDMuNjIuMDAzYS40LjQgMCAwMS4yNTguNzA3bC01LjU3NyA1LjE3MWEuNS41IDAgMDEtLjY0NiAwbC01LjQ5NC01LjE3NWEuNC40IDAgMDEuMjYtLjcwNWgzLjU4NWEzNjkuNTIgMzY5LjUyIDAgMDAwLTUuMTQ1Yy0uMDE3LTEuNjcuNDY2LTQuNDM3LTEuOTgtNy44NTcgNS44NTMgMCA2LjAzNSA1LjkwOCA2LjAwNSA3Ljg1Ny0uMDIgMS4yOTktLjAzIDMuMDEzLS4wMyA1LjE0NHpNMTYuMDIgMjFsLTMuNjItLjAwM2EuNC40IDAgMDEtLjI1OC0uNzA3bDUuNTc3LTUuMTcxYS41LjUgMCAwMS42NDYgMGw1LjQ5NCA1LjE3NWEuNC40IDAgMDEtLjI2LjcwNWgtMy41ODVhMzY5LjUyIDM2OS41MiAwIDAwMCA1LjE0NWMuMDE3IDEuNjctLjQ2NiA0LjQzNyAxLjk4IDcuODU3LTUuODUzIDAtNi4wMzUtNS45MDgtNi4wMDUtNy44NTcuMDItMS4yOTkuMDMtMy4wMTMuMDMtNS4xNDR6IiBmaWxsPSIjQzdDN0M3Ii8+PC9nPjwvc3ZnPg==);
`;

const LogcontentRight=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 32%;
`;

const RightTitle=styled.h2`
    font-family: Helvetica;
    color: #333;
    font-size: 1.3rem;
    line-height: 1.4rem;
    margin: 0 0 19px;
`;

const RightSubtitle=styled.p`
    font-family: Helvetica;
    font-size: 15px;
    line-height: 1.3em;
`;

const RightSpan=styled.span`
    text-decoration: underline;
`;

const JoinButton =styled.button`
    color: #333;
    background: #fff;
    border: 1px solid #333;
    height: 40px;
    font-size: 15px;
    font-weight: bold;
    width: 100%;
    border-radius: 3px;
    cursor: pointer;
    margin-top: 30px;

    &:hover{
        box-shadow: 0 0 6px 0 grey;
    }
`;

const FooterCapContainer =styled.div`
    width: 100%;
    padding: 10px 125px;
    background-color: #282828;
`;

const FooterCap =styled.div`
    display: flex;
    align-items: center;
`;

const Head_a =styled.a`
    font-family: "Emirates-Medium";
    color: #fff;
    display: flex;
    opacity: .8;
    
    &:after{
        position: relative;
        top: 14px;
        display: inline-block;
        width: 5px;
        height: 5px;
        margin-left: 15px;
        border-top: 1px solid #fff;
        border-right: 1px solid #fff;
        transform: rotate(45deg);
        content: "";

    }
    &:hover{
    color: white;
    opacity: 1.8;
    text-decoration: underline;
}
    `;

const FootercapHead =styled.h2`
    font-weight: lighter;
    font-size: 22px;

`;

const FootercapTitle =styled.h6`
    font-family: 'Helvetica';
    color: #fff;
    opacity: .5;
    margin-left: 15px;
    font-size: 14px;
    font-weight: lighter;
`;