const express = require('express');
const axios = require('axios');
const path = require('path');
const router = express.Router();

router.get('/favicon.ico', (req, res) => {
  res.status(204).end();
})

//--route navigation--

router.get('/', (req, res) => {
  res.render('index', {title: 'PALOOOONE'});
});

router.get('/login', (req, res) => {
  res.render('login', {title: 'login'});
});

router.get('/signup', (req, res) => {
  res.render('signup', {title: 'signup'});
});

router.get('/Goal_xG', (req, res) => {
  res.render('Goal_xG', {title: 'Goal_xG'});
});

router.get('/Goal_BTTS', (req, res) => {
  res.render('Goal_BTTS', {title: 'Goal_BTTS'});
});

router.get('/Players', (req, res) => {
  res.render('Players', {title: 'Calciatori'});
})

router.get('/Games', (req, res) => {
  res.render('Games', {title: 'Partite'});
})

router.get('/Teams', (req, res) => {
  res.render('Teams', {title: 'Squadre'});
})

router.get('/Champions_League', (req, res) => {
  res.render('Champions_League', {title: 'Champions League'});
})

router.get('/LaLiga', (req, res) => {
  res.render('LaLiga', {title: 'LaLiga'});
})

router.get('/Premier_League', (req, res) => {
  res.render('Premier_League', {title: 'Premier League'});
})

router.get('/Serie_A', (req, res) => {
  res.render('Serie_A', {title: 'Serie A'});
})

router.get('/testDB', (req, res) =>{
  res.render('testDB', {title: 'testDB'});
})

router.get('/testDB_query', (req, res) =>{
  res.render('testDB_query', {title: 'testDB_query'});
})

//--route data--

router.get('/get_btts', async (req, res) => {
  try{
    const response = await axios.get('http://localhost:3001/btts');
    console.log('risposta del db server:', response.data);

    res.json(response.data);
  } catch (e){
    res.status(500).send('Error fetching btts');
  }
})

router.get('/get_players', async (req, res) => {
  try{
    const response = await axios.get('http://localhost:8082/api/get_players');
    console.log('risposta del db server springboot:', response.data);

    res.json(response.data);
  } catch (e) {
    res.status(500).send('Error Fetching Players Data');
  }
})

router.post('/filter_players', async (req, res) => {
  const filter = {
    position: req.body.position,
    country_of_citizenship: req.body.state,
    club_name: req.body.team
  }

  try {
    const response = await axios.post('http://localhost:8082/api/get_filtered_players', filter, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log('risposta del db server springboot:', response.data);
    res.json(response.data);
  }catch (e) {
    console.error('Error filter data:', e);
    res.status(500).json({ error: 'Error sending filter to Springboot Server'});
  }
})

//route test

router.get('/fetch-data', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:8082/api/data');
    res.json(response.data);
  } catch (e) {
    console.error(e);
    res.status(500).send('Error fetching data from Spring Boot Server');
  }
})

router.post('/send-data', async (req, res) => {
  const playername = { name: req.body.firstName.trim() + " " + req.body.lastName.trim()};

  try{

    const response = await axios.post('http://localhost:8082/api/get_player', playername, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log('Response from Spring Boot:', response.data);
    res.json(response.data);
  }catch (e){
    console.error(e);
    res.status(500).json({error: 'Error sending data from Spring Boot Server'});
  }
})

router.get('/get_data', async(req, res) =>{
  try{
    const response = await axios.get('http://localhost:3001/data');
    const data = response.data;
    res.json(data);
  } catch (error){
    console.error('error fetching data from database server: ', error);
    res.status(500).send('error fetching data');
  }
})

router.post('/get_query', async (req, res) =>{

  const homeClubName = req.body.home_club_name;
  const awayClubName = req.body.away_club_name;

  try{
    const response = await axios.post('http://localhost:3001/query', {
      home_club_name: homeClubName,
      away_club_name: awayClubName
    });

    res.json(response.data);
  } catch (e) {
    console.error('error fetching data from database server: ', e);
    res.status(500).send('error fetching data');
  }
})

module.exports = router;
