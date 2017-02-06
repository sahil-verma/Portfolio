/**
 * Created by sahil on 2017-02-06.
 */
let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('HomePage');
});

module.exports = router;
