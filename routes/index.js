const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('home', { title: 'Home' });
});

router.get('/about', function(req, res, next) {
    res.render('about', { title: 'About Me' });
});

router.get('/project', function(req, res, next) {
    res.render('project', { title: 'Projects' });
});

router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'Contact Me' });
});

module.exports = router;