'use strict';

const express = require('express');
const router = express.Router();

// [START hello_world]
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Mapcat - Find whatever you need, wherever you are.'
  });
});
// [END hello_world]

module.exports = router;
