import * as React from 'react'; 

/*No sé cómo hacer los imports*/
/*Copié y pegué desde el proyecto q había hecho desde cero*/

function Calendar() {
    var gapi = window.gapi
    var CLIENT_ID = "1019694152170-7iar05s1ad0luhu9p14jvmg966uskb9f.apps.googleusercontent.com"
    var API_KEY = "AIzaSyASJOlcqh_3DsmhTQKM2k9XiRb25wrdGnk"
    var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
    var SCOPES = "https://www.googleapis.com/auth/calendar";

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
            'summary': 'Solicitud de reserva WeWork',
            'description': 'El usuario X realizó una reserva para las siguientes fechas',
            'start': {
                'dateTime': '2021-11-22T09:00:00-07:00',
                'timeZone': 'America/Argentina/Buenos_Aires'
            },
            'end': {
                'dateTime': '2021-11-22T17:00:00-07:00',
                'timeZone': 'America/Argentina/Buenos_Aires'
            },
            'recurrence': [
                'RRULE:FREQ=DAILY;COUNT=1'
            ],
            'attendees': [
                {'email': 'mirkobasar@gmail.com'},
            ],
            'sendNotifications':true,
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
    }

    return (
        <div className="App">
        <header className="App-header">
            <button onClick={handleClick}>Reservar</button>
        </header>
        </div>
    );
}

export default Calendar;
