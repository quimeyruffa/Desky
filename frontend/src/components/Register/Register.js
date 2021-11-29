import React, { useState } from 'react'
import styled from 'styled-components'
import Svg from '../../assets/SVG/FondoRegister.svg';

export const Register = () => {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');

    const Submit = async () => {
       console.log(name, email, password)
        await fetch('http://localhost:8080/users/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                
            },
            body: JSON.stringify({
                username:name,
                email: email,
                password: password
            })
        }).then(function(data){ if(data.status===200){ 
            window.location.href ='/login'
        }else{ 
            alert('Error al registrar el usuario')
        }  })
        
    }
    return (
        <ContainerRegister>
            <Left>

            </Left>
            <Right>
                <Title>Bienvenido!</Title>
                <Body>
                    <ContainerInput>
                        <Input size={'100px'}>
                            <span>Nombre</span>
                            <input type="text" onChange={(e) => setName(e.target.value)} />
                        </Input>

                        <Input  size={'100px'} >
                            <span>Apellido</span>
                            <input type="text" onChange={(e) => setLastname(e.target.value)} />
                        </Input>
                    </ContainerInput>
                    <br />
                    <Input  size={'200px'}>
                        <span>Nombre Empresa</span>
                        <input type="text" onChange={(e) => setEmpresa(e.target.value)} />
                    </Input>
                    <br />
                    <Input  size={'100px'}>
                        <span>Email</span>
                        <input type="email" onChange={(e) => setEmail(e.target.value)} />
                    </Input>
                    <br />
                    <ContainerInput>
                        <Input  size={'100px'}>
                            <span>Contraseña</span>
                            <input type="password" onChange={(e) => setPassword(e.target.value)} />
                        </Input>

                        <Input  size={'200px'} >
                            <span>Reingresar contraseña</span>
                            <input type="password" onChange={(e) => setRepassword(e.target.value)} />
                        </Input>
                    </ContainerInput>
                    <br /> <br /> <br />
                    <Button onClick={Submit}>Registrate</Button>
                </Body>
            </Right>
        </ContainerRegister>
    )
}

const ContainerRegister = styled.div`
        width:100vw;
        height:100vh;
        background-color:#4B03BA;
        display:flex;
        flex-direction: row;
        @media screen and (max-width: 768px){
            flex-direction:column;


        }
`
const Left = styled.div`
    width:50%;
    height:100vh;
    background-image:url(${Svg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom center, 50%, 50%;
    @media screen and (max-width: 768px){
        display:none;
    }
`
const Right = styled.div`
    width:50%;
    height:100%;
    background-color:#F3F3F3;
    padding:2em 5em;
    @media screen and (max-width: 768px){
        width:100%;
        
    }
`
const Title = styled.div`
    width:100%;
    display:flex;
    font-size:64px;
    font-weight:500;
    font-family: Roboto;
    @media screen and (max-width: 768px){
        font-size:48px;
    }
`
const Body = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
`

const ContainerInput = styled.div`
    display:flex;
    flex-direction:row;
    gap:2em;
    @media screen and (max-width: 768px){
        flex-direction:column;
       
`

const Input = styled.div`
    display:flex;
    flex-direction:column;
    input{
        border: 1px solid #5B5B5B;
        width:${props => props.width};
        height:55px;
        border-radius:10px;
        background-color:transparent;
        padding:0.5em;
    }
    span{
        position:relative;
        background-color:#F3F3F3;
        top:10px;
        left:12px;
        color:#5B5B5B;
        font-size:20px;
        width: ${props => props.size};
    }
`

const Button = styled.button`
    
    height:70px;
    border-radius:10px;
    background-color:#4B03BA;
    border:none;
    font-weight:bold;
    color:white;
    font-size:38.63px;
`