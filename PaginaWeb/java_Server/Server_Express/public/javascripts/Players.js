function init(){
    try {
        const buttonLogin = document.getElementById('login');
        buttonLogin.onclick = onSubmitLogin;
    } catch (e){ console.error(e); }

    try {
        const buttonSignup = document.getElementById('signup');
        buttonSignup.onclick = onSubmitSignup;
    } catch (e){ console.error(e); }

    try {
        const filterform = document.getElementById('players-filter');
        filterform.addEventListener('submit', filterData);
    } catch (e){ console.error(e); }

    onloadFillTable();
}

function onSubmitLogin() {
    fetch('/login')
        .then(response => {
            if (response.ok) {
                history.pushState(null, '', '/login'); //necessario per tenere aggiornata la cronologia di navigazione

                window.location.replace('/login');
            } else {
                throw new Error('Errore durante il reindirizzamento');
            }
        })
        .catch(error => {
            console.error('Errore nella gestione del login:', error)
        });
}

function onSubmitSignup() {
    fetch('/signup')
        .then(response => {
            if (response.ok) {
                history.pushState(null, '', '/signup'); //necessario per tenere aggiornata la cronologia di navigazione
                window.location.replace('/signup');
            } else {
                throw new Error('Errore durante il reindirizzamento');
            }
        })
        .catch(error => {
            console.error('Errore durante la gestione della registrazione:', error);
        });
}

async function onloadFillTable() {
    try {
        const response = await fetch('/get_players'); // Richiesta al main server
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();            // Aggiorna l'area con i dati ricevuti
        console.log('dati ricevuti:', data)

        const tableBody = document.querySelector('#players-table tbody');
        tableBody.innerHTML = ''; // Clear the table body
        data.forEach(player => {
            const row = document.createElement('tr');
            const nameCell = document.createElement('td');
            const teamNameCell = document.createElement('td');
            const positionCell = document.createElement('td');

            nameCell.textContent = player.name;
            teamNameCell.textContent = player.clubName;
            positionCell.textContent = player.position;

            row.appendChild(nameCell);
            row.appendChild(teamNameCell);
            row.appendChild(positionCell);

            tableBody.appendChild(row);
        });

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

async function filterData(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data  = Object.fromEntries(formData.entries());

    const filters = {}

    if(data.position){filters.position = data.position;}
    if(data.state){filters.state = data.state;}
    if(data.team){filters.team = data.team;}

    console.log('Sending filter: ', filters)
    try {
        const response = await axios.post('/filter_players', filters, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const result = response.data;
        console.log('Success: ', result);

        const tableBody = document.querySelector('#players-table tbody');
        tableBody.innerHTML = ''; // Clear the table body
        result.forEach(player => {
            const row = document.createElement('tr');
            const nameCell = document.createElement('td');
            const teamNameCell = document.createElement('td');
            const positionCell = document.createElement('td');

            nameCell.textContent = player.name;
            teamNameCell.textContent = player.clubName;
            positionCell.textContent = player.position;

            row.appendChild(nameCell);
            row.appendChild(teamNameCell);
            row.appendChild(positionCell);

            tableBody.appendChild(row);
        });
    } catch (e) {
        console.error('Error filtering data: ', e)
        const errorContainer = document.getElementById('dataContainer')
        errorContainer.innerHTML = '<p>Error fetching data</p>';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    init();
});