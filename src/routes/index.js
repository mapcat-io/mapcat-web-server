'use strict';

const express = require('express');
const router = express.Router();

// [START hello_world]
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Index Page'
  });
});
// [END hello_world]

module.exports = router;
