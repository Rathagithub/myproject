const express = require('express');
const router = express.Router();
const Storage = require('node-storage');
const store = new Storage('../storage');

router.get('/getplayers', (req, res) => {
 const users = store.get('players');
 res.json(users)
});

router.get('/getteams', (req, res) => {
 const teams = store.get('teams');
 res.json(teams)
});

router.post('/create/team', (req, res) => {
 const id = req.body.id
 const user = req.body
 store.put(`team.${id}`, user)
 res.json(user)
});

router.post('/create/player', (req, res) => {
 const id = req.body.id
 const user = req.body
 store.put(`players.${id}`, user)
 res.json(user)
});

router.delete('/delete/players', (req, res) => {
 store.remove('players');
 res.json("ok")
});

router.delete('/delete/teams', (req, res) => {
 store.remove('teams');
 res.json("ok")
});

module.exports = router;