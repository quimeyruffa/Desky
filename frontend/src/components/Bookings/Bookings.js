import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Cards from './Cards/Cards';
import Fondo from '../../assets/images/Coworking.png';

export const Bookings = () => {
    const [reservas, setReservas] = useState([]);
    const [estado, setEstado] = useState(false);
    const [eventos, setEventos] = useState(null);

    const handleChangeEstado = () => {
        setEstado(!estado);
    }

    var gapi = window.gapi
    var CLIENT_ID = "1019694152170-7iar05s1ad0luhu9p14jvmg966uskb9f.apps.googleusercontent.com"
    var API_KEY = "AIzaSyASJOlcqh_3DsmhTQKM2k9XiRb25wrdGnk"
    var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
    var SCOPES = "https://www.googleapis.com/auth/calendar";

    useEffect(async () => {
        gapi.load('client:auth2', () => {
            console.log('loaded client')

            gapi.client.init({
                apiKey: API_KEY,
                clientId: CLIENT_ID,
                discoveryDocs: DISCOVERY_DOCS,
                scope: SCOPES,
            })
            gapi.client.load('calendar', 'v3', () => console.log('Logueado!'))

            gapi.auth2.getAuthInstance().signIn()
                .then(() => {
                    // get events
                    gapi.client.calendar.events.list({
                        "calendarId": "primary",
                        "timeMin": (new Date()).toISOString(),
                        "showDeleted": false,
                        "singleEvents": true,
                        "maxResults": 10,
                        "orderBy": "startTime",
                        "q": localStorage.getItem("email")
                    }).then(response => {
                        const events = response.result.items
                        setEventos(events);})
                    })
                })
        },[])

    useEffect(async () => {
        const fetchData = async () => {
            const res = await fetch(`http://localhost:8080/reservas?email=${localStorage.getItem("email")}`, {method: 'GET'});
            const restest = await res.json();
            return restest
        }

        const fetchDataOficina = async () => {
            const res = await fetch(`http://localhost:8080/oficinas`, {method: 'GET'});
            const restest = await res.json();
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
        setReservas(aux);

    }, [estado])

    return (

        < Container >
            <P>Reservas</P>
            {reservas && eventos && reservas.map((reserva, index) => {
                console.log(reserva)
                return <Cards eventos={eventos} id_objeto={reserva.reserva._id} coworking_img={Fondo} state={reserva.reserva.Confirmado}
                       coworking_name={reserva.oficina.nombreCowork}
                       coworking_direccion={`${reserva.oficina.direccion[0].streetAddress}, ${reserva.oficina.direccion[0].city}`}
                              fecha_Ini={`${reserva.reserva.fechaIni.toString().substring(0, 10)}`}
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