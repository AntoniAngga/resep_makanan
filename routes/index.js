var express = require('express');
var router = express.Router();
var cIndex = require('../controller/cIndex');

/* GET home page. */
router.get('/', cIndex.index);

router.post('/tweetResep', cIndex.twitterPost);

module.exports = router;
