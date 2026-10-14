function init(){
    try {
        const buttonLogin = document.getElementById('login');
        buttonLogin.onclick = onSubmitLogin;
    } catch (e){}
    try {
        const buttonSignup = document.getElementById('signup');
        buttonSignup.onclick = onSubmitSignup;
    } catch (e){ console.error(e); }
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

document.addEventListener('DOMContentLoaded', function () {
    init();
});