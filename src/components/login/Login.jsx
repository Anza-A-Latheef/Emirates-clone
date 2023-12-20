import React from 'react';
import styled from 'styled-components';
import Loghead from './Loghead';
import Logcontent from './Logcontent';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';

    const Login = ({onLogin}) => {
  return (
    <LoginContainer>
        <LoginHeader>
        <Link to="/" style={{ textDecoration: 'none'}}>
            <SimpleLogo>
                <Logo src="./src\assets\images\emirates-logo-horizontal.svg" alt="Emirates logo" />
            </SimpleLogo>
        </Link>
        </LoginHeader>
        <LoginTop>
            <Loghead/>
        </LoginTop>
        <LoginBottom>
            {/* <Logcontent onLogin ={onLogin} /> */}
            <Logcontent/>
        </LoginBottom>
        <Footer/>  
    </LoginContainer>
  )
}

export default Login

//styling area

const LoginContainer=styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    background-color: #f6f6f6;
`;

const LoginHeader=styled.div`
    background:#333333;
	width:100%;
	display:flex;
	position: relative;
    height: 55px;
    padding: 0px 125px;
`;

const SimpleLogo=styled.a`
    position: absolute;
    width: 159px;
    height: 100%;
    background-color: #d71921;
`;

const Logo=styled.img`
    width: 100%;
    height: 100%;
`;

const LoginTop=styled.div`

`;

const LoginBottom=styled.div`
`;

