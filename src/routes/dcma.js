'use strict';

const express = require('express');
const router = express.Router();

// [START hello_world]
router.get('/', (req, res) => {
  res.render('dcma', {
    title: 'Mapcat - DCMA'
  });
});
// [END hello_world]

module.exports = router;
