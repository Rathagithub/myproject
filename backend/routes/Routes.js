const express = require('express');
const router = express.Router();
const Storage = require('node-storage');
const store = new Storage('../storage');

router.get('/getplayers', (req, res) => {
 const users = store.get('players');
 res.json(users)
});

router.post('/create', (req, res) => {
 const id = req.body.id
 const user = req.body
 store.put(`players.${id}`, user)
 res.json(user)
});

router.delete('/delete', (req, res) => {
 const type = 'players'
 store.remove(type);
 res.json("ok")
});

module.exports = router;