import React from 'react';
import styled from 'styled-components';
import Cards from './Cards/Cards';
import Fondo from '../../assets/images/Coworking.png';

export const Bookings = () => {
    return (

        < Container >
            <P>Reservas</P>
            <Cards coworking_img={Fondo} state={true} />
            <Cards coworking_img={Fondo} state={false} />
            <P>Historial</P>
        </Container>

    )
}

const Container = styled.div`
    display:flex;
    flex-direction:column;
    padding-left:7em;
    padding-top:2em;
    min-height: 100vh;
    background:#E5E5E5;
`

const P = styled.p`
    font-size:50px;
    padding-bottom:1em;
    display:flex;
    font-weight:bold;
    font-family:'Roboto';
    letter-spacing:2px;    
`