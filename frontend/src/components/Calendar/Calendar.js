import {gapi} from 'gapi-script'
import {useEffect, useState} from "react";


function Calendar({id_coworking, className, id_oficina}) {
    const [nombreCowork, setNombreCowork] = useState("");
    const user_email = localStorage.getItem('email');
    let fechaLlegada = new Date(localStorage.getItem('fechaIni'))
    let fechaSalida = new Date(localStorage.getItem('fechaFin'))
    const [email, setEmail] = useState("");

    // fechaLlegada = `'${fechaLlegada.toISOString().substring(0, 19)}-07:00'`;
    // fechaSalida = `'${fechaSalida.toISOString().substring(0, 19)}-07:00'`;

    var CLIENT_ID = "1019694152170-7iar05s1ad0luhu9p14jvmg966uskb9f.apps.googleusercontent.com"
    var API_KEY = "AIzaSyASJOlcqh_3DsmhTQKM2k9XiRb25wrdGnk"
    var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
    var SCOPES = "https://www.googleapis.com/auth/calendar";

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://localhost:8080/cowork?id=${id_coworking}`, {method: 'GET'});
            const dataCowork = await response.json();
            setEmail(dataCowork[0].email);
            setNombreCowork(dataCowork[0].nombre);
            console.log(dataCowork[0].email, dataCowork[0].nombre, fechaLlegada.toISOString(), fechaSalida.toISOString(), user_email)
        }

        fetchData();
    }, []);

    const handleClick = () => {

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
                    var event = {
                        'summary': `Solicitud de reserva ${nombreCowork}`,
                        'description': `El usuario ${user_email} realizó una reserva para las siguientes fechas`,
                        'start': {
                            'dateTime': `${fechaLlegada.toISOString().substring(0, 11)}00:00:00-03:00`,
                            'timeZone': 'America/Argentina/Buenos_Aires'
                        },
                        'end': {
                            'dateTime': `${fechaSalida.toISOString().substring(0, 11)}00:00:00-03:00`,
                            'timeZone': 'America/Argentina/Buenos_Aires'
                        },
                        'recurrence': [
                            'RRULE:FREQ=DAILY;COUNT=1'
                        ],
                        'attendees': [
                            {'email': `${email}`},
                            {'email': `${user_email}`}
                        ],
                        'sendNotifications': true,
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                {'method': 'email', 'minutes': 24 * 60},
                                {'method': 'popup', 'minutes': 10}
                            ]
                        }
                    }
                    var request = gapi.client.calendar.events.insert({
                        "calendarId": "primary",
                        "resource": event,
                        "sendUpdates": "all"
                    })

                    request.execute(event => {
                        window.open(event.htmlLink)
                    })
                })
        })

        const reserva = {
            idUsuario: localStorage.getItem("id"),
            Vigente: true,
            Confirmado: false,
            fechaIni: fechaLlegada,
            fechaFin: fechaSalida,
            cantPeronas: 1,
            idOficina: id_oficina,
            idCowork: id_coworking,
            emailUsuario: localStorage.getItem("email")
        }

        fetch(`http://localhost:8080/reserva`,{method: 'POST',headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',

            }, body: JSON.stringify(reserva)});
    }


    return (
        <button className={className} onClick={handleClick}>Reservar</button>
    )
}

export default Calendar;
