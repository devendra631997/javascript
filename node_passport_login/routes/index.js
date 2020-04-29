const express = require('express');
const Device = require("../models/Device")
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.sendFile('index.html', {
    user: req.user
  })
);

module.exports = router;
