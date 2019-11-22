var express = require('express');
var router = express.Router();
var multiparty = require('multiparty');
var path = require('path');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.post('/file', function (req, res, next) {
    var form = new multiparty.Form();
    // form.encoding = 'utf-8';
    form.uploadDir = 'public/uploads/';

    form.parse(req,function (err,fields,files) {
        debugger
        res.send('hihi');
    })
});

module.exports = router;
