import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Cards from './Cards/Cards';
import Fondo from '../../assets/images/Coworking.png';

export const Bookings = () => {
    const [reservas, setReservas] = useState([]);
    useEffect(async () => {
        const fetchData = async () => {
            const res = await fetch(`http://localhost:8080/reservas?email=${localStorage.getItem("email")}`, {method: 'GET'});
            const restest = await res.json();
            console.log(restest)
            return restest
        }

        const fetchDataOficina = async () => {
            const res = await fetch(`http://localhost:8080/oficinas`, {method: 'GET'});
            const restest = await res.json();
            console.log(restest)
            return restest
        }
        const aux = [];
        const data = await fetchData();
        const dataOficinas = await fetchDataOficina();
        for (const reserva of data) {
            for (const oficina of dataOficinas) {
                if (oficina.idOficina === reserva.idOficina && oficina.idCowork === reserva.idCowork) {
                    aux.push({reserva: reserva, oficina: oficina});
                }
            }
        }
        console.log(aux);
        setReservas(aux);

    }, [])

    return (

        < Container >
            <P>Reservas</P>
            {reservas && reservas.map((reserva, index) => {
                return <Cards coworking_img={Fondo} state={reserva.reserva.Confirmado}
                       coworking_name={reserva.oficina.nombreCowork}
                       coworking_direccion={`${reserva.oficina.direccion[0].streetAddress}, ${reserva.oficina.direccion[0].city}`}
                       coworking_date={`${reserva.reserva.fechaIni.toString().substring(0, 10).replaceAll("-","/")} - ${reserva.reserva.fechaFin.toString().substring(0, 10).replaceAll("-","/")}`}/>
                })
            }
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