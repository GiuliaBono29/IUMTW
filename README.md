# Interazione Uomo-Macchina e Tecnologie Web (IUMTW)

Progetto sviluppato per il corso di **Interazione Uomo-Macchina e Tecnologie Web** della Laurea Triennale in Informatica, Università di Torino. Il progetto riguarda un sito web dedicato al calcio, con statistiche su squadre, giocatori e partite, e si divide in due parti: **IUM** (analisi dei dati e usabilità) e **TW** (sviluppo del sito). Il progetto è stato sviluppato in gruppo per il corso di IUMTW, insieme a un collaboratore.

## Tecnologie usate

* Python, Jupyter Notebook (pandas, Matplotlib)
* HTML, CSS, JavaScript
* Node.js, Express, EJS, Axios
* MongoDB, Mongoose
* Java, Spring Boot, JPA/Hibernate

## Progetto

### Parte IUM – Analisi dei dati

Analisi di un dataset calcistico diviso in **dati statici** (club, competizioni, giocatori) e **dati dinamici** (presenze, partite, eventi di gioco, formazioni, valutazioni dei giocatori). Per ogni dataset sono stati svolti:

* **pulizia dei dati:** eliminazione di duplicati, valori nulli e outlier, gestione dei valori non significativi (ad esempio `-1` nei minuti dei rigori);
* **analisi:** statistiche descrittive, scatter plot e unione di più dataset per ottenere informazioni più complete;
* **visualizzazione:** grafici pensati per un tifoso o un giornalista sportivo, con maggiore approfondimento sui dati dinamici.

### Parte IUM – Usabilità

Valutazione dell'usabilità delle pagine del sito con **test con utenti** (4 partecipanti di età ed esperienza diverse). Dopo alcune domande sulle prime impressioni (scopo del sito, pubblico, azioni possibili), gli utenti hanno svolto compiti reali (login, registrazione, navigazione tra le pagine dei giocatori, uso dei filtri, ricerca delle statistiche), con misura di successo, errori, tempi e richieste d'aiuto, e hanno infine espresso un parere sul sito.

### Parte TW – Sviluppo del sito web

Sito web multi-pagina con architettura a più server che comunicano tra loro:



* Server principale (Node.js + Express): serve le pagine HTML tramite template engine (home, login, registrazione, calciatori, partite, squadre, statistiche Goal xG e BTTS, pagine dei principali campionati) ed espone le rotte che il browser chiama con fetch e axios. Fa da intermediario verso gli altri server.
* Server dei dati (Java, Spring Boot): API REST (/api) con architettura a livelli Controller → Service → Repository, che accede alla tabella dei calciatori tramite JPA/Hibernate e fornisce l'elenco dei giocatori e la ricerca filtrata per nazionalità, ruolo e squadra.
* Server delle partite (Node.js + Express + MongoDB): usa Mongoose per accedere al database MongoDB Football\_Data, con schema delle partite (stagione, competizione, squadre, gol, posizioni e formazioni). Espone la ricerca delle partite tra due squadre, l'elenco completo e il calcolo della classifica BTTS (percentuale di partite in cui entrambe le squadre segnano, prime 15 squadre).



## Dati

I dataset non sono inclusi nel repository. I notebook Jupyter sono già eseguiti.

