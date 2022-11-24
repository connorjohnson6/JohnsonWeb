const express = require('express');
const router = express.Router();

//home page route
router.get('/next1', (req, res) => res.send("Next 1"));

//next page route
router.get('/next2', (req, res) => res.send("Next 2"));





module.exports = router;

