# React API Dashboard

Dashboard realizzata tramite il Framework React e alcune sue librerie e plugin come Axios, Redux, React Router, Hooks.
Il Progetto può essere visionato anche attraverso la mia pagina personale di GitHub [@marco-faltoni](https://github.com/marco-faltoni)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Come eseguire il progetto in locale

Scaricare la repository su una cartella a scelta del prprio PC.
Aprire la repo da terminale con il proprio IDE preferito.

per installare le dipendenze (assicurarsi di aver installato NodeJS)
### `npm install`

per far partire il progetto in locale
### `npm start`

ATTENZIONE: per poter far funzionare la web-app, assicurarsi di recpurare l'API Keys e aggiungerla al file .env (da creare dentro la repo) scrivendo le seguenti chiavi: 
- REACT_APP_DASHBOARD_API=AGGIUNGERE_KEY


## Funzionalità Obbligatorie sviluppate

- L’applicazione è basata su Create React App, seguendo le best practice di React.

- L’applicazione simula una dashboard di un dipendente di un negozio, in cui vengono visualizzati il nome dello shop e i suoi relativi prodotti.

- Le informazioni dei prodotti vengono recuparate dall'API di riferimento e vengono mostrati titolo, descrizione, recensioni, categoria e prezzo.

- I prodotti possono essere cancellati tramite il menu a tendina.

- L'utente può aggiungere un nuovo prodotto tramite la CTA corrispondente, e devono inserite obbligatoriamente tutte le informazioni necessarie all'API per aggiungere nel database il prodotto.

- L'applicazione presenta una UI/UX user-friendly.

## Funzionalità Aggiuntive sviluppate

- L’utente, tramite le apposite icone, può cambiare la visualizzazione e il layout dei prodotti, e vederli tramite griglie o tramite colonne. I prodotti cambieranno layout automaticamente.
