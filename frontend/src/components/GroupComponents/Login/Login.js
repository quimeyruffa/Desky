import React from 'react';
import styled from 'styled-components';
import Svg from '../../assets/SVG/FondoLogin.svg';
import { ReactComponent as LogoDesky } from '../../assets/SVG/LogoDesky.svg';
import { IoPersonOutline } from 'react-icons/io5';
import { FiLock } from 'react-icons/fi';
export const Login = () => {
    return (
        <LoginContainer>
            <br /> <br />  <br />
            <Logo/>
            <br />
            <Input>
                <IoPersonOutline className='icon' />
                <input type="text" placeholder="USERNAME"/>
            </Input>
            <Input>
                <FiLock className='icon' />
                <input type="text" placeholder="PASSWORD"/>
            </Input>
            <br /> <br />
            <Button>Login</Button>
            <br />
            <p>Or</p>
            <br />
            <Button>Register</Button>
            <br /> <br />
            <p>Forgot Password?</p>
        </LoginContainer>
    )
}

const LoginContainer = styled.div`
    width:100vw;
    height:100vh;
    flex-direction:column;
    background-color:#6600FF;
    display:flex;
    align-items:center;
    background-image:url(${Svg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom center, 50%, 50%;
    p{
        color:white;
    }
`
const Logo = styled(LogoDesky)`
    width:20%;
    height:20%;
`

const Input = styled.div`
    display:flex;
    flex-direction:column;
    input{
        border: 1px solid white;
        color:white;
        width:300px;
        font-weight:bold;
        outline:none;
        height:45px;
        border-radius:5px;
        background-color:transparent;
        padding:0.5em;
        ::placeholder {
            color: white;
            text-align: center;
        }
    }
    .icon{
        color:white;
        position:relative;
        top:37px;
        left:10px;
        width:32px;
        height:32px;
    }
`

const Button = styled.button`
    width:300px;
    height:45px;   
    border:none;
    background-color:white;
    font-family: "Roboto";
    font-weight:bold;
    letter-spacing:1px;
    border-radius: 5px;
    color:#6600FF;
`