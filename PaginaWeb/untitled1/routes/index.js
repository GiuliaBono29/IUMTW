const express = require('express');
const path = require('path');
const controllerGames = require("../../untitled1/controllers/games");
const query = require("../controllers/games").query;
require('../database/database');
const router = express.Router();

router.get('/favicon.ico', (req, res) => {
  res.status(204).end();
})
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/query', async (req, res, next) => {
    const homeClubName = req.body.home_club_name;
    const awayClubName = req.body.away_club_name;

    try {
        const results = await controllerGames.query({
            home_club_name: homeClubName,
            away_club_name: awayClubName
        });
        res.json({
            message: 'query executed successfully',
            data: results
        });
    } catch (error) {
        res.status(500).json({ error: error }
        );
    }
});

router.get('/data', (req, res) => {
    query({})
        .then(data => {
            console.log('Data fetched:', data); // Debug: Stampa i dati recuperati
            res.json(data);
        })
        .catch(e => {
            console.error('Error Fetching all Data: ', e);
            res.status(500).send('Error Fetching all Data');
        });
});

router.get('/btts', async (req, res) => {
    try{
        const result = await controllerGames.btts();
        console.log('Risultati btts:', result);
        res.json(result);
    } catch (e) {
        res.status(500).json({
            message: e.message
        });
    }
})

module.exports = router;

