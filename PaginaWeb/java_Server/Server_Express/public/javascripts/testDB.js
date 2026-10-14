function init(){
        const fetchButton = document.getElementById('submit');
        if(fetchButton){
            fetchButton.addEventListener('click', fetchdata);
        }

        const buttonQuery = document.getElementById('xForm');
        if(buttonQuery){
        buttonQuery.addEventListener('submit', searchingdata);
        }
}
async function fetchdata() {
    const dataContainer = document.getElementById('results');

    try {
        const response = await fetch('/fetch-data'); // Richiesta al main server
        if (!response.ok) throw new Error('Network response was not ok');

        const data = await response.json();            // Aggiorna l'area con i dati ricevuti
        console.log('Received data:', data);
        dataContainer.innerHTML = `Name: ${data.name}`;
    } catch (error) {
        console.error('Error fetching data:', error);
        dataContainer.innerHTML = 'Error fetching data';
    }

}


async function searchingdata(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log('Sending Data:', data);

    try {
        const response = await axios.post('/send-data', data, {
            headers: {
                'Content-Type': 'application/json'
            }
        }); // Richiesta al main server

        const result = response.data;            // Aggiorna l'area con i dati ricevuti
        console.log('Success: ', result);

        const dataContainer = document.getElementById('results');
        //conversione JSON to string con indennizzazione di due spazi
        dataContainer.innerHTML = `<pre>${JSON.stringify(result, null, 2)}</pre>`;
    } catch (error) {
        console.error('Error fetching data:', error);
        const dataContainer = document.getElementById('results');
        dataContainer.innerHTML = '<p>Error Fetching Data</p>';
    }

}

/**
 * it sends an Ajax query using axios
 * @param url the url to send to
 * @param data the data to send (e.g. a Javascript structure)
 */

document.addEventListener('DOMContentLoaded', function () {
    init();
})