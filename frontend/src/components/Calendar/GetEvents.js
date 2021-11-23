function GetEvents() {
    var gapi = window.gapi
    var CLIENT_ID = "1019694152170-7iar05s1ad0luhu9p14jvmg966uskb9f.apps.googleusercontent.com"
    var API_KEY = "AIzaSyASJOlcqh_3DsmhTQKM2k9XiRb25wrdGnk"
    var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
    var SCOPES = "https://www.googleapis.com/auth/calendar";

    const getEvents = () => {
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
                    "orderBy": "startTime"
                }).then(response => {
                    const events = response.result.items
                    console.log('EVENTS: ', events)
                })
            })
    })
    }

    return (
        <div className="App">
        <header className="App-header">
            <button onClick={getEvents}>GetEvents</button>
        </header>
        </div>
    );
}

export default GetEvents;
