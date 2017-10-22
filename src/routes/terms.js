'use strict';

const express = require('express');
const router = express.Router();

// [START hello_world]
router.get('/', (req, res) => {
  res.render('terms', {
    title: 'Mapcat - Terms of Service'
  });
});
// [END hello_world]

module.exports = router;
