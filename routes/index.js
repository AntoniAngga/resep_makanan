var express = require('express');
var router = express.Router();
var cIndex = require('../controller/cIndex');
const recipes = require('../controller/recipes');

/* GET home page. */
router.get('/', cIndex.index);

router.post('/tweetResep', cIndex.twitterPost);

router.get('/recipes', recipes.findByFoodName);

module.exports = router;
